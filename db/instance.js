import MongoDBConnection from "./MongoDBConnection.js";
import { DATABASE_URI } from "../config.js";
const instance = new MongoDBConnection(DATABASE_URI);
export default instance;
