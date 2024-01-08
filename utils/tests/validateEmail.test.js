import validateEmail from "../validateEmail";

describe("validateEmail function", () => {
    test("should return true for a valid email", () => {
        const validEmails = [
            "test@example.com",
            "test.email@sub.example.com",
            "test_email@example.co",
        ];

        validEmails.forEach((email) => {
            expect(validateEmail(email)).toBe(true);
        });
    });

    test("should return false for an invalid email", () => {
        const invalidEmails = [
            "notAnEmail",
            "test@",
            "test@.com",
            "test@example",
            "test@example.",
            "@example.com",
            "test example@example.com",
        ];

        invalidEmails.forEach((email) => {
            expect(validateEmail(email)).toBe(false);
        });
    });
});
