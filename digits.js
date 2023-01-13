'use strict'
function getCombinations(input) {
    const digits = {
        2: ['a','b', 'c'],
        3: ['d', 'f', 'e'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    if (input == '') return [];

    if (typeof(input) == "number") input = String(input)

    if (typeof(input) !== "string") return "It's not string";

    if (input.length >4) return "Too much digits";

    if (input.length == 0) return "It's not digits";

    let inputArray = input.split("");

    if (inputArray.includes('1')) return "Please don't enter 1";

    return mixString(input, digits);
}

function mixString(input, digits) {
    let result = [''];
    let index = 0;

    while (index < input.length) {
        const next = digits[input[index]];
        const nextMix = [];

        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < next.length; j++) {
                nextMix.push(`${result[i]}${next[j]}`);
            }
        }

        result = nextMix;
        index++;
    }

    return result;
}

let output = getCombinations('234');
console.log(output);
