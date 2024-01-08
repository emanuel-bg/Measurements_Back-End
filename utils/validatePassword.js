export default function validatePassword(password) {
    let minLength = 5;
    let maxLength = 20;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecialChar = false;
    let specialCharacters = "$@$!%*?&";

    if (password.length < minLength || password.length > maxLength) {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        let character = password[i];

        if (character >= "A" && character <= "Z") {
            hasUppercase = true;
        }

        if (character >= "a" && character <= "z") {
            hasLowercase = true;
        }

        if (character >= "0" && character <= "9") {
            hasDigit = true;
        }

        if (specialCharacters.includes(character)) {
            hasSpecialChar = true;
        }
    }

    return hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
}
