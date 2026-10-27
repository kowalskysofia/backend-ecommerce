import express from "express";
import productRoutes from "./routes/product.routes.js"
// inicializar la aplicación express
const app = express();

//Middleware para parsear el body de las solicitudes como JSON
app.use (express.json());



app.use(productRoutes);


export default app;