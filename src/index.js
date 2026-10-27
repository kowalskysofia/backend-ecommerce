// import express framework
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import dns from "dns";
import app from "./app.js";


dns.setServers( ["8.8.8.8", "8.8.4.4"] );

const MONGODB_URI = process.env.MONGODB_URI;

//EQYa8bApxXKtr4U
const PORT = process.env.PORT || 3000; //http://localhost:3000

mongoose.connect(MONGODB_URI).then(() => {

    console.log("Conectado a MongoDB correctamente");
    //Inicializar el servidor y ponerlo a escuchar en el puerto 3000
    app.listen(PORT, () => {
        console.log(`Server funcionando en puerto ${PORT}`)
    })

}).catch((error) => {
    console.log(error)
})