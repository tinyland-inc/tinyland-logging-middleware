/**
 * @tinyland-inc/tinyland-logging-middleware
 *
 * tRPC-compatible logging middleware with dependency-injected logger.
 *
 * @example
 * ```typescript
 * import {
 *   configure,
 *   loggingMiddleware,
 *   createLogger,
 * } from '@tinyland-inc/tinyland-logging-middleware';
 *
 * // At application startup
 * configure({ logger: myStructuredLogger });
 *
 * // In tRPC router definition
 * const t = initTRPC.context<Context>().create();
 * const protectedProcedure = t.procedure.use(loggingMiddleware);
 *
 * // Scoped logger for a specific module
 * const log = createLogger('auth-service');
 * log.info('User logged in', { userId: '123' });
 * ```
 *
 * @packageDocumentation
 */

// Configuration
export { configure, getConfig, resetConfig, getNoopLogger } from './config.js';

// Types
export type {
	LogLevel,
	LogContext,
	Logger,
	LoggingMiddlewareConfig,
} from './types.js';

// Middleware
export { loggingMiddleware } from './middleware.js';

// Logger factories
export { createLogger, createScopedLogger } from './create-logger.js';
