import validateJustNumbers from "./validateJustNumbers";
import NoSpacesAndNull from "./noSpacesAndNull";
export default function validateMeasureUserId(userId) {
    return validateJustNumbers(userId) && NoSpacesAndNull(userId);
}
