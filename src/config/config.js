import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 8080,
    dbName: process.env.DB_NAME,
    dbURL: process.env.DB_URL
}
