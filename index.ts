import * as R from "ramda";

export { sortLines } from "./src/text-commands";
export { taggedLog } from "./src/prototyping";
export { applicative } from "./src/functions";
export { actionsFromObj } from "./src/actions-helper";
export { filterObject, filterObjectByKeys } from "./src/filter-object";

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

/**
 * Boolean map
 * @param yes 
 * @param no 
 */
export const boolean = (yes, no) => (x) => x ? yes : no;

/**
 * Indexed map
 */
export const mapIndexed = R.addIndex(R.map);
