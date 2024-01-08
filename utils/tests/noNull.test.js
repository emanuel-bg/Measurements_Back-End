import NoNull from "../noNull";

describe("NoNull function", () => {
    test("should return true for a non-empty string", () => {
        const nonEmptyStrings = [
            "Hello",
            "123",
            "  Spaces around  ",
            "This is a string with characters",
        ];

        nonEmptyStrings.forEach((str) => {
            expect(NoNull(str)).toBe(true);
        });
    });

    test("should return false for an empty or whitespace-only string", () => {
        const emptyStrings = [
            "",
            " ", // Single space
            "   ", // Multiple spaces
            "\t", // Tab character
            "\n", // Newline character
        ];

        emptyStrings.forEach((str) => {
            expect(NoNull(str)).toBe(false);
        });
    });
});
