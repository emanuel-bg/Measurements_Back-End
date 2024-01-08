import validateJustNumbers from "./validateJustNumbers.js";
import NoSpacesAndNull from "./noSpacesAndNull.js";
export default function validateMeasureAmount(amount) {
  if (!amount) {
    return false;
  }
  return validateJustNumbers(amount) && NoSpacesAndNull(amount);
}
