import { Router } from "express";

import {
getProducts,
getProductById,
createProduct,
updateProduct,
deleteProduct
} from "../controllers/product.controller.js"


const router = Router();

//Obtener todos los productos
router.get("/products", getProducts);
//Obtener un productos especifico por su ID
router.get("/products/:id", getProductById);
//Crear un nuevo producto 
router.post("/products/", createProduct);
//Actualizar un producto especifico por su ID
router.put("/products/:id", updateProduct)
//Eliminar un producto por su ID
router.delete("/products/:id", deleteProduct)





export default router;