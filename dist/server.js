"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const index_routes_1 = require("./routes/index.routes");
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    const port = process.env.SERVER_PORT || 3000;
    app.use(express_1.default.json());
    app.use(index_routes_1.categoryRoutes);
    app.use(index_routes_1.videosRoutes);
    return app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});
