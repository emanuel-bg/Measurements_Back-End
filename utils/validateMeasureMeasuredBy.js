import validateLetters from "./validateLetters";
import noNull from "./noNull";
export function validateMeasureMeasuredby(measuredby) {
    return validateLetters(measuredby) && NoNull(measuredby);
}
