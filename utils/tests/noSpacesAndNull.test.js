import NoSpacesAndNull from "../noSpacesAndNull.js";
import tester from "../tester.js";


const table = [
    { name: "Word", input: 'Hello', output: true },
    { name: "numbers", input: '123', output: true },
    { name: "NoSpacesHere", input: 'NoSpacesHere', output: true },
    { name: "withoutSpaces", input: '1234WithoutSpaces', output: true },
    { name: "Empty", input: '', output: false },
    { name: "Space", input: ' ', output: false },
    { name: "MultipleSpaces", input: '   ', output: false },
    { name: "Has Spaces", input: 'Has Spaces', output: false },
    { name: "Another String With Spaces", input: 'Another String With Spaces', output: false },
    { name: "Null", input: null, output: false },
];



tester(table,NoSpacesAndNull)
