export default function validateLetters(word) {
    for (let i = 0; i < word.length; i++) {
        const character = word[i];
        if (
            character !== " " &&
            !(
                (character >= "a" && character <= "z") ||
                (character >= "A" && character <= "Z")
            )
        ) {
            return false;
        }
    }
    return true;
}
