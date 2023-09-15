import { DataSource } from "typeorm";
import "reflect-metadata";

import dotenv from "dotenv";
dotenv.config();


export const AppDataSource = new DataSource({
     type: "postgres",
     url:process.env.TYPEORM_URL,
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
     entities: ["src/entities/**/*.ts"],
     migrations: ["src/database/migrations/**/*.ts"],
     subscribers: []
 });

 

