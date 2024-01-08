export default function validateJustNumbers(n) {
    if (n.length === 0) {
        return false;
    }

    for (let i = 0; i < n.length; i++) {
        var character = n[i];
        if (isNaN(parseInt(character))) {
            return false;
        }
    }

    return true;
}
