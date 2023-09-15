import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import express from "express";
import "dotenv/config";

import { categoryRoutes, videosRoutes } from "./routes/index.routes";


AppDataSource.initialize().then(() => {
     const app = express();
     const port = process.env.SERVER_PORT || 3000;

     app.use(express.json());

     app.use(categoryRoutes);
     app.use(videosRoutes);

     return app.listen(port, ()=>{
          console.log(`Servidor rodando na porta ${port}`); 
     });
});


