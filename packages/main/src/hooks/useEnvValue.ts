const useEnvValue = (v?: string) => (v ? import.meta.env[v] ?? "" : import.meta.env);

export {useEnvValue};
