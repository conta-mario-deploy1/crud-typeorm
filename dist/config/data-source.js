"use strict";
const path = require("path");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.TYPEORM_URL,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    name: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: false,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    logging: true,
    entities: [
        path.join(__dirname, "dist/entities/**/*.{js,ts}")
        // "src/entities/**/*.{js,ts}"
    ],
    migrations: [
        path.join(__dirname, "migrations/**/*.{js,ts}")
        // "src/database/migrations/**/*.{js,ts}"
    ],
    subscribers: []
});
