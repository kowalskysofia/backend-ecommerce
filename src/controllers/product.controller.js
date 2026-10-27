import Product from "../models/product.model.js"


// #Funcion para obetener todos los productos
export async function getProducts(req, res) {
    try {
        //Obtener todos los productos desde la base de datos
        const productos = await Product.find();

        return res.status(200).send({
            success: true,
            message: "Productos obtenidos correctamente",
            products: productos,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error al obtener los productos",
        })
    }
}



// #Funcion para obetener un producto por su ID
export async function getProductById(req, res) {
    try {

        //primero debemos obtener el id del producto que la persona que hace la solicitud está buscando
        const id = req.params.id;
        //Buscamos el producto 
        const product = await Product.findById(id); //Si no lo encuentra, product será null (entonces hacemos un if)

        if (!product) {
            return res.status(404).send({
                success: false,
                message: "Producto no encontrado"
            })
        }
        return res.status(200).send({
            success: true,
            product,
            message: "Producto obtenido correctamente"
        })



    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error al obtener el producto",
        })
    }
}

// #Funcion para crear un nuevo producto 
export async function createProduct(req, res) {
    try {
        // req.body.createdAt = '2020-01-01T00:00:00.000Z'
        req.body.createdAt = undefined

        //Aquí normalmente se recibirían los datos del producto desde req.body
        //const producto = req.body;

        //Aquí normalmente se guardaria el producto en la base de datos,al crear una nueva instancia del modelo estamos preparando el documento para ser guardado.
        const nuevoProducto = new Product(req.body);

        console.log(nuevoProducto);

        //Guardar el producto en la base de datos
        await nuevoProducto.save()

        //Siempre hay que devolver una respuesta al cliente
        return res.status(201).send({
            success: true,
            product: nuevoProducto,
            messsage: "Producto creado correctamente"
        })

    } catch (error) {
        console.log(error) //Hacemos un console.log del error para depuración interna

        if (error.name === "ValidationError") {
            return res.status(400).send({
                success: false,
                message: "Error de validación",
            })
        }

        return res.status(500).send({
            success: false,
            message: "Error al crear el producto"
        }) //Al usuario le dejaos un mensaje génerico, sin exponer detalles internos

    }
}


// #Funcion para actualizar un producto por su ID
export async function updateProduct(req, res) {
try{
    //Obtenemos el ID del producto desde los parámetros de la URL
    const id = req.params.id;

//Actualizar el producto
                        //findByIdAndUpdate recibe tres argumentos: 
                        // el ID del producto, 
                        // los datos a actualizar 
                        // un objeto de opciones (opcional)
const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true} )
// a. El producto exista y se actualice
// b. El producto no exista y se devuelva un error 404
//Dar una respuesta

if(!updateProduct){
    return res.status(404).send ({
        success: false,
        message: "Producto no encontrado"
    })
}

return res.status(200).send({
success: true,
product: updatedProduct,
message: "Producto actualizado correctamente"

})



}catch(error){
console.log(error)
return res.status(500).send({
    success: false,
    message: "Error al actualizar el producto",
})


}
}


// #Funcion para eliminar un producto por su ID
export async function deleteProduct(req, res) {
    try {

        const id = req.params.id;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).send({
                success: false,
                message: "Producto no encontrado"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Producto eliminado correctamente.",
        })
 } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error al eliminar el producto",
        })
    }
}


