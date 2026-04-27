import { getConfig } from './config.js';
export const createLogger = (component) => {
    const { logger } = getConfig();
    return {
        debug: (message, context) => logger.debug(message, { component, ...context }),
        info: (message, context) => logger.info(message, { component, ...context }),
        warn: (message, context) => logger.warn(message, { component, ...context }),
        error: (message, context) => logger.error(message, { component, ...context }),
    };
};
export const createScopedLogger = createLogger;
