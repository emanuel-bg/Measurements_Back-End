import validateEmail from "./validateEmail.js"
import validatePassword from "./validatePassword.js";
import noSpacesAndNull from "./noSpacesAndNull.js"
import validateLetters from "./validateLetters.js"
import noNull from "./noNull.js"

export default function validateUserData(userData) {
    const errors = {};
    if (!validateEmail(userData.email)) {
      errors.email = ["Invalid email"];
    }
  
    if (!validatePassword(userData.password)) {
      errors.password = ["The password doesn't meet the system requirements"];
    }
  
    if (!noSpacesAndNull(userData.username)) {
      errors.username = ["The username doesn't meet the system requirements"];
    }
  
    if (!validateLetters(userData.name) || !noNull(userData.name)) {
      errors.name = ["The name doesn't meet the system requirements"];
    }
  
    return errors;
  }