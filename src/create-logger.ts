/**
 * Scoped logger factory.
 *
 * Creates a thin wrapper around the injected logger that automatically
 * stamps every log entry with a `component` field.
 *
 * @packageDocumentation
 */

import { getConfig } from './config.js';
import type { Logger, LogContext } from './types.js';

/**
 * Create a logger whose entries are automatically tagged with
 * the given component name.
 *
 * @param component - Identifier that will appear in every log entry.
 * @returns A {@link Logger} that delegates to the configured logger.
 */
export const createLogger = (component: string): Logger => {
	const { logger } = getConfig();
	return {
		debug: (message: string, context?: LogContext) =>
			logger.debug(message, { component, ...context }),
		info: (message: string, context?: LogContext) =>
			logger.info(message, { component, ...context }),
		warn: (message: string, context?: LogContext) =>
			logger.warn(message, { component, ...context }),
		error: (message: string, context?: LogContext) =>
			logger.error(message, { component, ...context }),
	};
};

/**
 * Alias for {@link createLogger}.
 *
 * Provided for backward compatibility with call-sites that imported
 * `createScopedLogger` from the original monorepo module.
 */
export const createScopedLogger = createLogger;
