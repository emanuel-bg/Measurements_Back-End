import validateLetters from "../validateLetters";

describe("validateLetters function", () => {
    test("should return true for a string containing only letters", () => {
        const validStrings = [
            "abc",
            "ABC",
            "AbCdEfG",
            "a b c", // spaces are ignored
            "LettersWithSpaces",
        ];

        validStrings.forEach((str) => {
            expect(validateLetters(str)).toBe(true);
        });
    });

    test("should return false for a string containing non-letter characters", () => {
        const invalidStrings = [
            "123", // numbers
            "!@#$", // special characters
            "abc123", // numbers and letters
            "A@C", // special character
        ];

        invalidStrings.forEach((str) => {
            expect(validateLetters(str)).toBe(false);
        });
    });
});
