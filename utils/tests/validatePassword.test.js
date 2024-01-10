import validatePassword from "../validatePassword.js";
import tester from "../tester.js";

const table = [
    // test name, test input and test expected output
    { name: "Alphanumeric with Special Characters", input: 'Passw0rd!', output: true },
    { name: "Alphanumeric with Special Characters", input: 'Secure123$', output: true },
    { name: "Alphanumeric with Special Characters", input: 'Test@1234', output: true },
    { name: "Alphanumeric with Special Characters", input: 'AbcdEfgh1$', output: true },
    { name: "Alphabetic Characters", input: 'abcd', output: false },
    { name: "Exceeds Maximum Length", input: 'verylongpasswordthatexceedsthemaximumlimit', output: false },
    { name: "Missing Uppercase", input: 'nouppercase1!', output: false },
    { name: "Missing Lowercase", input: 'NOLOWERCASE1!', output: false },
    { name: "No Alphanumeric Characters", input: '1234123', output: false },
    { name: "Only Alphabetic and Uppercase", input: 'Onlylettersanduppercase', output: false },
];

tester(table,validatePassword)