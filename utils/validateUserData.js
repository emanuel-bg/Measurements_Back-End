export default function validateUserData(userData) {
    const errors = {};
    if (!validateEmail(userData.email)) {
      errors.email = ["Invalid email"];
    }
  
    if (!validatePassword(userData.password)) {
      errors.password = ["The password doesn't meet the system requirements"];
    }
  
    if (!NoSpacesAndNull(userData.username)) {
      errors.username = ["The username doesn't meet the system requirements"];
    }
  
    if (!validateLetters(userData.name) || !NoNull(userData.name)) {
      errors.name = ["The name doesn't meet the system requirements"];
    }
  
    return errors;
  }