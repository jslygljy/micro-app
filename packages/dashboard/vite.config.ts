/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// import PurgeIcons from "vite-plugin-purge-icons";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { viteMockServe } from "vite-plugin-mock";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import qiankun from "vite-plugin-qiankun";
import importToCDN, { autoComplete } from "vite-plugin-cdn-import";

/**
 * 配置插件
 */
const configPlugins = ({
  VITE_BUILD_USE_VISUALIZER,
  VITE_BUILD_USE_COMPRESSION,
  VITE_USE_MOCK,
}: any) => {
  const plugins = [
    qiankun("dashboard", { useDevMode: true }),
    // ant-design-vue
    Components({
      resolvers: [AntDesignVueResolver()],
      dts: "src/components.d.ts",
    }),
    importToCDN({
      modules: [
        autoComplete("vue"),
        // {
        //     name:'vue',
        //     var:'Vue',
        //     path:'https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.prod.js'
        // },
        {
          name: "vuex",
          var: "Vuex",
          path: "https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js",
        },
        {
          name: "vue-router",
          var: "VueRouter",
          path: "https://cdn.jsdelivr.net/npm/vue-router@4.0.10/dist/vue-router.global.prod.js",
        },
        {
          name: "pinia",
          var: "Pinia",
          path: "https://cdn.jsdelivr.net/npm/pinia@2.0.14/dist/pinia.iife.min.js",
        },
      ],
    }),
    // svg-icon
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/svgs")],
      symbolId: "icon-[dir]-[name]",
    }),
    // Iconify
    // PurgeIcons({}),
  ];

  if (process.env.NODE_ENV === "production") {
    /**
     * 生产环境
     */
    // visualizer
    VITE_BUILD_USE_VISUALIZER === "true" &&
      plugins.push(
        visualizer({
          gzipSize: true,
          brotliSize: true,
        })
      );
    // compression
    VITE_BUILD_USE_COMPRESSION === "true" && plugins.push(viteCompression());
  } else {
    /**
     * 开发环境
     */
    // mock
    VITE_USE_MOCK === "true" &&
      plugins.push(
        viteMockServe({
          // 配置mock位置
          mockPath: "/src/mock",
        })
      );
    // JSX
    plugins.push(vueJsx());
  }
  return plugins;
};

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const LOAD_ENV = loadEnv(mode, process.cwd());
  return defineConfig({
    // 打包编译基础路径前缀
    base: command === "serve" ? "./" : LOAD_ENV.VITE_BASE_PREFIX,
    // 配置 css 预处理
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "primary-color": "#1a73e8",
          },
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      extensions: [
        ".vue",
        ".mjs",
        ".js",
        ".ts",
        ".jsx",
        ".tsx",
        ".json",
        ".node",
        ".scss",
      ],
      alias: {
        "@": resolve("./src"),
        "@views": resolve("./src/views"),
      },
    },
    // 使用插件
    plugins: [vue(), ...configPlugins(LOAD_ENV)],
    // 扩展esbuild
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: "import { h } from 'vue';",
    },
    server: {
      host: "0.0.0.0",
      port: 8001,
      cors: true,
      origin: "//localhost:8001",
    },
    optimizeDeps: {
      include: ["vue", "vuex", "vue-router"],
    },
    build: {
      rollupOptions: {
        output: {
          globals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
          },
          // eslint-disable-next-line consistent-return
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  });
};
