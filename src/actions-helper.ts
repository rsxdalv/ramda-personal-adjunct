import * as R from "ramda";

type ActionMorphism = <T extends object = {}>(a: T) => {[x in keyof T]: x};

export const actionsFromObj: ActionMorphism = R.compose(
    R.apply(R.zipObj),
    R.repeat(R.__, 2),
    R.keys
);
