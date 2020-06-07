import wordsToNumbers from "words-to-numbers";
var pluralize = require("pluralize");

const wordsToDecimal = (input) => {
    const lower = input.toString().toLowerCase().trim();
    if (lower.search("and") === -1) {
        const splits = lower.split(" ");
        if (splits.length === 1) {
            return lower === "half" ? 0.5 : wordsToNumbers(lower);
        } else if (splits.length === 2) {
            return wordsToNumbers(splits[0]) * wordsToFraction(pluralize.singular(splits[1]));
        }
        console.error(`failed to parse ${input}`);
        return 0;
    } else {
        const parts = lower.split("and");
        return Number(parts.reduce((a, b) => wordsToDecimal(a) + wordsToDecimal(b), 0));
    }
}

const wordsToFraction = (input) => {
    switch (input) {
        case "half":
            return 0.5;
        case "third":
            return eval("1/3");
        case "quarter":
            return 0.25;
        case "fifth":
            return 0.2;
        case "sixth":
            return eval("1/6");
        case "seventh":
            return eval("1/7");
        case "eighth":
            return 0.125;
        case "ninth":
            return eval("1/9");
        default:
            return 0;
    }
}

module.exports.wordsToDecimal = wordsToDecimal;
