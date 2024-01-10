import bcrypt from "bcrypt";
const SALT_ROUNDS = 12;
export default async function encriptPassword(password = '') {
    try {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      return hashedPassword;
    } catch (error) {
      throw new Error("Error encrypting password");
    }
  }