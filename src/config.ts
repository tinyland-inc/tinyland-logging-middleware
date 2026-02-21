/**
 * Configuration management for the logging middleware.
 *
 * Consumers call {@link configure} once at startup to inject a logger.
 * If no logger is configured, a silent no-op logger is used so the
 * middleware never throws due to missing configuration.
 *
 * @packageDocumentation
 */

import type { Logger, LoggingMiddlewareConfig } from './types.js';

/** A logger that silently discards all messages. */
const noopLogger: Logger = {
	debug: () => {},
	info: () => {},
	warn: () => {},
	error: () => {},
};

let currentConfig: LoggingMiddlewareConfig = {
	logger: noopLogger,
};

/**
 * Inject the logger implementation used by the middleware.
 *
 * @param config - Configuration containing the logger to use.
 */
export function configure(config: LoggingMiddlewareConfig): void {
	currentConfig = { ...config };
}

/**
 * Retrieve the current configuration (primarily for testing).
 *
 * @returns The active {@link LoggingMiddlewareConfig}.
 */
export function getConfig(): LoggingMiddlewareConfig {
	return currentConfig;
}

/**
 * Reset configuration to the default no-op logger.
 * Intended for use in test teardown.
 */
export function resetConfig(): void {
	currentConfig = { logger: noopLogger };
}

/**
 * Return the built-in no-op logger instance.
 * Useful when consumers need a safe default.
 */
export function getNoopLogger(): Logger {
	return noopLogger;
}
