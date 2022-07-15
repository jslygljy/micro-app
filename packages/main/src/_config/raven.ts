const domain = process.env.domain || "local";

const config = {
    url: "",
};

switch (domain) {
    case "local":
    case "development": {
        break;
    }
    case "test": {
        break;
    }
    case "production": {
        config.url = "http://7316f779daf24345a978861cfdd45ee1@sentry.syy.dongchali.cn/2";
        break;
    }
    default: {
        break;
    }
}

export default config;
