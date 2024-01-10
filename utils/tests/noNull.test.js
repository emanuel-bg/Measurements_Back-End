import noNull from "../noNull.js";
import tester from "../tester.js";

// TDD
// Table driven development
const table = [
        { name: "Word", input: "Hello", output: true },
        { name: "Number", input: "123", output: true},
        { name: "Spaces", input: "  Spaces around  ", output: true },
        { name: "Text", input: "This is a string with characters", output: true },
        { name: "Empty", input: "", output: false },
        { name: "Space", input: " ", output: false }, 
        { name: "MultipleSpaces", input: "   ", output: false },
        { name: "Tab", input: "\t", output: false },
        { name: "Newline", input: "\n", output: false }, 
        
    
];

tester(table,noNull)
