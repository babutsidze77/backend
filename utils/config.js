import dotenv from "dotenv";

dotenv.config();
const { MONGODB_URI } = process.env;

export { MONGODB_URI };
