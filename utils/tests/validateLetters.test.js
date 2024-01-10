import validateLetters from "../validateLetters.js";
import tester from "../tester.js";
const table = [
    { name: "Alphabetic Characters", input: 'abc', output: true },
    { name: "Uppercase Letters", input: 'ABC', output: true },
    { name: "Mixed Case Alphabets", input: 'AbCdEfG', output: true },
    { name: "Alphabetic Characters with Spaces", input: 'a b c', output: true },
    { name: "Words Containing Letters", input: 'LettersWithSpaces', output: true },
    { name: "Non-Alphabetic Characters", input: '123', output: false },
    { name: "Special Characters", input: '!@#$', output: false },
    { name: "Alphanumeric Characters", input: 'abc123', output: false },
    { name: "Mixed Characters", input: 'A@C', output: false },
];


tester(table,validateLetters)