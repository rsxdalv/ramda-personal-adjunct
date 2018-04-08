import * as R from "ramda";

export const filterObject = pred => R.pipe(
    R.toPairs,
    R.filter(pred),
    R.fromPairs,
);

export const filterObjectByKeys = pred =>
    filterObject(R.pipe(R.head, pred));
