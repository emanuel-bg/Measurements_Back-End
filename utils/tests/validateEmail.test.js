import validateEmail from "../validateEmail.js";
import tester from "../tester.js";
const table = [
    { name: "Valid Domain Email", input: 'test@example.com', output: true },
    { name: "Valid Subdomain Email", input: 'test.email@sub.example.com', output: true },
    { name: "Valid Underscore Email", input: 'test_email@example.co', output: true },
    { name: "Invalid Non-email", input: 'notAnEmail', output: false },
    { name: "Invalid Incomplete Email", input: 'test@', output: false },
    { name: "Invalid Incomplete Domain Email", input: 'test@.com', output: false },
    { name: "Invalid Incomplete Domain Name", input: 'test@example', output: false },
    { name: "Invalid Empty Domain Email", input: 'test@example.', output: false },
    { name: "Invalid Empty Local Part Email", input: '@example.com', output: false },
    { name: "Invalid Space Email", input: 'test example@example.com', output: false },
];

tester(table,validateEmail)