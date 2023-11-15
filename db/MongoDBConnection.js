import mongoose from "mongoose";

export default class MongoDBConnection {
  constructor(connectionString) {
    if (!MongoDBConnection.instance) {
      this.connectionString = connectionString;
      this.isConnected = false;

      MongoDBConnection.instance = this;
    }

    return MongoDBConnection.instance;
  }

  async connect() {
    if (!this.isConnected) {
      try {
        await mongoose.connect(this.connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
        this.isConnected = true;
      } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
      }
    }
  }

  disconnect() {
    if (this.isConnected) {
      mongoose.disconnect();
      console.log("Disconnected from MongoDB");
      this.isConnected = false;
    }
  }
}
