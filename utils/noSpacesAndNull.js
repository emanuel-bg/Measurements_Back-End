export default function NoSpacesAndNull(word) {
    return word != null && word.trim() !== "" && !word.includes(" ");
}
