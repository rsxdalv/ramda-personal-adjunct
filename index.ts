import * as R from "ramda";

/**
 * Composition of map and pick 
 * Pluck multiple variables, same as picking from each member
 */
export const pluckMany = R.pipe(R.pick, R.map);

/**
 * Log and return value
 * Less prone to @@transducer/step errors
 */
export const log = x => (console.log(x), x);

/**
 * Add virtual properties to a collection
 * @param spec Spec for virtual properties
 */
export const virtual = spec => R.converge(R.merge, [R.identity, R.applySpec(spec)]);
