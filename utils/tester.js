import tap from 'tap';

export default function tester(tests,method){
    tests.map(function singleItem(item){
        const actual = method(item.input);
        const expected = item.output;
        tap.equal(actual, expected, item.name);
    });
}