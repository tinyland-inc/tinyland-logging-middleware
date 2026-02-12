/**
 * Shared types for the logging middleware package.
 *
 * All external dependencies are expressed as interfaces so consumers
 * inject their own implementations via {@link configure}.
 *
 * @packageDocumentation
 */

/** Supported log severity levels. */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/** Arbitrary structured context attached to every log entry. */
export interface LogContext {
	component?: string;
	[key: string]: unknown;
}

/** Minimal logger contract consumed by the middleware. */
export interface Logger {
	debug(message: string, context?: LogContext): void;
	info(message: string, context?: LogContext): void;
	warn(message: string, context?: LogContext): void;
	error(message: string, context?: LogContext): void;
}

/**
 * Configuration object injected once at application startup
 * via {@link configure}.
 */
export interface LoggingMiddlewareConfig {
	logger: Logger;
}
