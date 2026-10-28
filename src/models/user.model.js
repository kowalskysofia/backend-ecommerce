import mongoose from "mongoose";
const { Schema, model } = mongoose


const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true,
    },

    email: {
        type: String,
        unique: true, //Garantiza que no haya dos usarios con el mismo email
        index: true, // El indice nos sirve para mejorar la velocidad de las consultas por email
        required: true,
        minLength: 2,
        maxLength: 150,
        trim: true,
        lowercase: true, // Valida que el emal tenga un formato correcto
        match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/, "Por favor ingresa un email válido"]
    },

    password: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 128,
        trim: true,
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "client", "admin"],
    },


bornDate: {
    type: Date,
    validate: {
        validator: function(fechaNacimientoEnviada) {
            const diezAñosAtras = new Date().getTime() - 10 * 365 * 24 * 60 * 60 * 1000;

            return fechaNacimientoEnviada <= new Date(diezAñosAtras);
        },
        message: "La fecha de nacimiento debe indicar una edad mínima de 10 años"
    }
},

image: {
    type: String,
},

// pets:[
// {type: String}
// ],

// address: {
// {
//     street: {type: String},
//     city:{ type: String},
//     state: {type: String},
//     zip: {type: String},
//     country:{ type: String},
// }








}, { timestamps: true })

const User = model("User", userSchema)


export default User;

// Schema
/*
name
email
password
passwordConfirmation
role
bornDate
createdAt
image
updatedAt

*/ 