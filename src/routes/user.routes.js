import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const router = Router();


//Crear usuario (Register)
router.post("/users", createUser )
//Login
//TODO - authentication (Login)
//Borrar usuario por ID
//Actualizar usuario por ID
//Obtener todos los usuarios 
//Logout


export default router;