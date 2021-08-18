import wordsToNumbers from "words-to-numbers";
var pluralize = require("pluralize");

export const wordsToDecimal = (input) => {
    const lower = input.toString().toLowerCase().trim();
    const wholeNumber = wordsToNumbers(lower);
    if (wholeNumber && typeof wholeNumber === "number") {
        return wholeNumber;
    }
    if (lower.search("and") === -1) {
        const splits = lower.split(/\s+/);
        if (splits.length === 1) {
            return lower === "half" ? 0.5 : wordsToNumbers(lower);
        } else if (splits.length === 2) {
            return wordsToNumbers(splits[0]) * wordsToFraction(pluralize.singular(splits[1]));
        }
        console.error(`failed to parse ${input}`);
        return 0;
    } else {
        const parts = lower.split("and");
        return wordsToDecimal(parts[0]) + wordsToDecimal(parts[1]);
    }
}

export const wordsToFraction = (input) => {
    switch (input) {
        case "half":
            return 0.5;
        case "third":
            return 1/3;
        case "quarter":
            return 0.25;
        case "fifth":
            return 0.2;
        case "sixth":
            return 1/6;
        case "seventh":
            return 1/7;
        case "eighth":
            return 0.125;
        case "ninth":
            return 1/9;
        case "tenth":
            return 0.1;
        default:
            return 0;
    }
}
