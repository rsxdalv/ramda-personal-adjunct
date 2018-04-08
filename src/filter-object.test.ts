import * as R from "ramda";
import { filterObject, filterObjectByKeys } from "./filter-object";

const data = {
    1: 3,
    4: 5,
};

R.pipe(
    filterObject(R.equals(["1", 3])),
    R.tap(console.log)
)(data)    

R.pipe(
    filterObjectByKeys(R.pipe(parseInt, R.gte(2))),
    R.tap(console.log)
)(data)
