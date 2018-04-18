
/**
 * Log and return value
 * Less prone to @@transducer/step errors
 */
export const taggedLog = y => x => (console.log(y, x), x);
