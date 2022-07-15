## 微服务框架
基座技术栈包含TS,lerna,vue3,qiankun,antd按需加载，echart,cdn,vuex,pinia
## 包管理
lerna  单体式仓库
优点：
* 自动解决packages之间的依赖关系。
* 通过git 检测文件改动，自动发布。
* 根据git 提交记录，自动生成CHANGELOG
缺点：
* 每个仓库都有node_modules
  
## lerna 工作流
* 运行lerna updated来决定哪一个包需要被publish
* 将所有更新过的的包中的package.json的version字段更新
* 将所有更新过的包中的依赖更新
* 为新版本创建一个git commit或tag
* 将包publish到npm上
  
#### lerna 初始化项目
```
lerna init # 固定模式(Fixed mode)默认为固定模式，packages下的所有包共用一个版本号(version)
lerna init --independent # 独立模式(Independent mode)，每一个包有一个独立的版本号

lerna bootstrap //安装各packages依赖 这一步操作，官网上是这样描述的在当前的Lerna仓库中引导包。安装所有依赖项并链接任何交叉依赖项。
```
#### lerna 启动
$ lerna run test # 运行所有包的 test 命令
$ lerna run build # 运行所有包的 build 命令
$ lerna run --parallel watch # 观看所有包并在更改时发报，流式处理前缀输出

$ lerna run --scope my-component test # 运行 my-component 模块下的 test

#### lerna 安装所有的依赖
lerna bootstrap

#### learna 发布
$ lerna publish # 用于发布更新
$ lerna publish --skip-git # 不会创建git commit或tag
$ lerna publish --skip-npm # 不会把包publish到npm上