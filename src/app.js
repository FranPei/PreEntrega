import ProductManager from './EntregablePE.js'; //importa el default export 
//import {ProductManage} from './Entregable2.js'; //importa especificamente el default export Produc Manager
import CarritoManager from './Carrito.js';

import express from "express";
const app = express();
const server = app.listen(8080, () => console.log("Escuchando el puerto 8080"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const manager = new ProductManager();
const managerCarrito = new CarritoManager();


let products = [];




app.get('/api/products',(req, res)=>{           // "/products?limite=nro"
  
    let limite = req.query.limite;
    if(!limite || !(limite > 0)) return res.send(manager.getProducts());
    res.send(manager.getProducts().slice(0,limite));
})

app.get('/api/products/:pid',(req, res)=>{
    let idProduct = req.params.pid;
    let product = manager.getProductByID(parseInt(idProduct));
    if(!product) return res.send({error: "Producto no encontrado"});
    res.send({product});
})

app.post('/api/products', (req, res) => {
    let product = req.body; 
    if(!product.title || !product.description ||!product.price ||!product.code ||!product.stock ||!product.status ||!product.category) {
        return res.status(400).send({status:"error", error:"Valores Incompletos"})
    }
    manager.addProducts(product);
    res.send({status:"succes", message: "Producto Agregado"});

});



app.put('/api/products/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatePro = req.body;
    const actualizado = manager.updateProduct(userId, updatePro);
    if(!actualizado) return res.send({error: "Producto no encontrado"});
    res.send({status:"succes", message: "Producto Actualizado"});

});


app.delete('/api/products/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const eliminado = manager.deleteProduct(userId);
    if(!eliminado) return res.send({error: "Producto no encontrado"});
    res.send({status:"succes", message: "Producto Eliminado"});
    
});

////////////////////////CARRITO/////////////////////////////////////

app.post('/api/carts', (req, res) => {
    managerCarrito.addCarrito();
    res.send({status:"succes", message: "Carrito Agregado"});

});

app.get('/api/carts/:cid',(req, res)=>{
    let idCarrito = req.params.cid;
    let carrito = managerCarrito.getCarritoByID(parseInt(idCarrito));
    if(!carrito) return res.send({error: "Carrito no encontrado"});
    res.send({carrito});
})

app.post('//api/carts/:cid/product/:pid', (req, res) => {
    let idCarrito = req.params.cid;
    let idProduct = req.params.pid;
    managerCarrito.addProductToCarrito(parseInt(idCarrito),parseInt(idProduct));
    res.send({status:"succes", message: "Producto Agregado"});


});
