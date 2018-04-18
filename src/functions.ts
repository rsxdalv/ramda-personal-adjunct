import * as R from "ramda";

/**
 * Applies a list of functions in order over an input
 */
export const applicative = R.apply(R.pipe);
