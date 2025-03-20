const { default: mongoose } = require("mongoose");

const connection = {};
export const connectToDb = async () => {
      try {
            if (connection.isConnnected) {
                  console.log("Using existing connection");
                  return; 
            }
            const db = await mongoose.connect(process.env.MONGO);
connection.isConnnected = db.connections[0].readyState;
      } catch {
            console.log(error);
            throw new Error(error);
      }
}