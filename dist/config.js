const noopLogger = {
    debug: () => { },
    info: () => { },
    warn: () => { },
    error: () => { },
};
let currentConfig = {
    logger: noopLogger,
};
export function configure(config) {
    currentConfig = { ...config };
}
export function getConfig() {
    return currentConfig;
}
export function resetConfig() {
    currentConfig = { logger: noopLogger };
}
export function getNoopLogger() {
    return noopLogger;
}
