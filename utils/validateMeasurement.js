import validateMeasureAmount from "./validateMeasureAmount.js";

export default function validateMeasurement(measureData) {
    let errors = {};
    if (!validateMeasureAmount(measureData?.amount?.toString())) {
        errors.amount = "Invalid measure amount";
        //Only numbers available
    }
 
    return errors;
}
