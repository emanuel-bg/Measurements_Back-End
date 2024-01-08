import NoSpacesAndNull from "../noSpacesAndNull";

describe("NoSpacesAndNull function", () => {
    test("should return true for a string without spaces or being null", () => {
        const validStrings = [
            "Hello",
            "123",
            "NoSpacesHere",
            "1234WithoutSpaces",
        ];

        validStrings.forEach((str) => {
            expect(NoSpacesAndNull(str)).toBe(true);
        });
    });

    test("should return false for a string containing spaces or being null", () => {
        const invalidStrings = [
            "",
            " ", // Single space
            "   ", // Multiple spaces
            "Has Spaces", // String with spaces
            "Another String With Spaces",
            null,
        ];

        invalidStrings.forEach((str) => {
            console.log(str);
            expect(NoSpacesAndNull(str)).toBe(false);
        });
    });
});
