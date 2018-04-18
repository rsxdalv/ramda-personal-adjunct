import * as R from "ramda";

/**
 * Sorts lines by a parsed regexp
 * @param matcher 
 * @param parser 
 */
export const sortLines = (matcher, parser = R.identity) => R.pipe(
    R.split("\n"),
    R.sortBy(R.pipe(R.match(matcher), parser))
);

export const sortLinesTest = () => {
    const d = `{ id: 0, image: spruces, answer: 8 },
{ id: 1, image: maples, answer: 0 },
{ id: 2, image: pine, answer: 9 },
{ id: 3, image: oak, answer: 1 },
{ id: 4, image: birch, answer: 3 },
{ id: 5, image: spruce, answer: 4 },
{ id: 6, image: maple, answer: 6 },
{ id: 7, image: birches, answer: 2 },
{ id: 8, image: oaks, answer: 5 },
{ id: 9, image: pines, answer: 7 },`;

    R.pipe(
        sortLines(/answer: (\d+)/),
        R.tap(console.log)
    )(d)
};
