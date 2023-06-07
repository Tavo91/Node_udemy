const faker = require("faker");
const boom = require("@hapi/boom");



const getAllProductos = (req, res)=>{
    
    try {
        
        const productos = []
        const {size} = req.query
        const limit = size ||5
        for(let index = 0; index<limit; index++){
            productos.push({
                nombre: faker.commerce.productName(),
                precio: parseInt(faker.commerce.price(), 10),
                imagen: faker.image.imageUrl(),
            })
            
        }
        return productos
    } catch(err) {
        console.log(err)

    }
    
}


const crearNuevoProducto = (req, res)=>{
 try {
    const body = req.body
    console.log(body)
    res.json({
        ok:true,
        data: body
    })
    
 } catch (error) {
    console.log(error)
    
 }
}


const actualizarProducto = (req, res)=>{
  try {
    const { id } = req.params;
    if(id !=1){
        throw boom.notFound('producto no encontrado')
    }
    const body = req.body;
    res.json({
            message:'Producto Actualizado',
            producto: body,
             id,
            
        });
  } catch (error) {
    console.log(error)
    
  }
}


const eliminarProducto = (req, res)=>{
    try {
        const { id } = req.params;
    res.json({
            message:'Producto Eliminado',
            id,
            
        });
    } catch (error) {
        console.log(error)
    }
}


const getOneProducto = (req, res)=>{
    try {
        const { id } = req.params;
    res.json({
      id: id,
      nombre: "teclado",
      precio: 2000,
      categoria: "tecnologia",
    });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllProductos,
    crearNuevoProducto,
    actualizarProducto,
    eliminarProducto,
    getOneProducto
}