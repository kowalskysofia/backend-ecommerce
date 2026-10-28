import User from "../models/user.model.js"

async function  createUser(req, res) {
    try{
    const newUser = new User(req.body)
    //Poder guardar un usuario en la base de datos
    await newUser.save()    
 return res.send("Usuario creado correctamente!")


    }catch(error){

        console.log(error)
        return res.status(500).send("Error al crear el usuario")



    }

    
   
}














function Login(req, res) {

    return res.send("Usuario haciendo Login")

}

export {
    createUser,
    Login
}