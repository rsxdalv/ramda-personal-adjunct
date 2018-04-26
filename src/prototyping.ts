import * as R from "ramda";

/**
 * Log and return value
 * Less prone to @@transducer/step errors
 */
export const taggedLog = y => x => (console.log(y, x), x);

/**
 * Prints diff objects
 */
export const printDiff = R.pipe(
    R.map(R.converge(R.call, [
        R.pipe(
            R.pick(["added", "removed"]),
            R.filter(R.equals(true)),
            Object.keys,
            R.head,
            R.defaultTo("equal"),
            R.propOr(R.identity, R.__, {
                added: chalk.green,
                removed: chalk.red,
            })
        ),
        R.prop("value"),
    ])),
    R.join("")
);
