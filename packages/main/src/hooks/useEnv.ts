const useEnv = (env?: string) => {
    const {VITE_ENV} = import.meta.env;
    if (env) {
        if (env === "dev") return VITE_ENV === "development";
        if (env === "prod") return VITE_ENV === "production";
        return env === VITE_ENV;
    }
    return VITE_ENV;
};

export {useEnv};
