// En el modelo de productos vamops a definir la estructura de los documentos de productos en la base de datos

import mongoose from "mongoose";




const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true,

    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 400,
        trim: true,
    },
    stock: {
        type: Number,
        min: 0,
        default: 0,
    },

    image: {
        type: String,
        trim: true,
    },

// createdAt: {
//         type: Date,
//         default: Date.now, //Para que se registre automáticamente la fecha de creación del producto hacemos uso de Date.now sin los paréntesis ya que sinop se ejecutaría   inmediatamente y no al crear el documento
//     },
// _id:
//createdAt
//updatedAt

}, {timestamps: true});

//El modelo nos va a poder permitir vincularnos con nuestra colección de productos en la base de datos
const Product = mongoose.model("Product", productSchema);
// Dentro de nuestra db al definir este modelo, se creará una colección  llamada "products" (plural de ""Product") si no existe.
export default Product;