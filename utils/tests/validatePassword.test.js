import validatePassword from "../validatePassword";

describe("validatePassword function", () => {
    test("should return true for a valid password", () => {
        const validPasswords = [
            "Passw0rd!",
            "Secure123$",
            "Test@1234",
            "AbcdEfgh1$",
        ];

        validPasswords.forEach((password) => {
            expect(validatePassword(password)).toBe(true);
        });
    });

    test("should return false for an invalid password", () => {
        const invalidPasswords = [
            "abcd", // Less than min length (5 characters)
            "verylongpasswordthatexceedsthemaximumlimit", // More than max length (20 characters)
            "nouppercase1!", // Missing uppercase letter
            "NOLOWERCASE1!", // Missing lowercase letter
            "1234123", // Missing both uppercase and lowercase letters
            "Onlylettersanduppercase", // No digits or special characters
        ];

        invalidPasswords.forEach((password) => {
            expect(validatePassword(password)).toBe(false);
        });
    });
});
