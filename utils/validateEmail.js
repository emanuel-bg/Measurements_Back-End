export default function validateEmail(email) {
    // TODO add unit tests
    const val = /^\S+@\S+\.\S+$/; //https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
    return val.test(String(email).toLowerCase());
}
