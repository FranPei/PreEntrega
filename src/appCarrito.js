import CarritoManager from './Carrito.js'; //importa el default export 
//import {ProductManage} from './Carrito.js'; //importa especificamente el default export Produc Manager

import express from "express";
const app = express();
const server = app.listen(8080, () => console.log("Escuchando el puerto 8080"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const managerCarrito = new CarritoManager();
//manager.getProducts();

let products = [];
//let usproductsers = [];

/*

app.get('/api/carts',(req, res)=>{           // "/products?limite=nro"
  
    let limite = req.query.limite;
    if(!limite || !(limite > 0)) return res.send(managerCarrito.getProducts());
    res.send(managerCarrito.getProducts().slice(0,limite));
})

app.get('/api/carts/:cid',(req, res)=>{
    let idProduct = req.params.cid;
    let product = managerCarrito.getProductByID(parseInt(idProduct));
    if(!product) return res.send({error: "Carrito no encontrado"});
    res.send({product});
})*/

app.post('/api/carts', (req, res) => {
    //let carritoNuevo = req.body; 
    managerCarrito.addCarrito();
    res.send({status:"succes", message: "Carrito Agregado"});

});

/*
app.put('/api/products/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatePro = req.body;
    const actualizado = managerCarrito.updateProduct(userId, updatePro);
    if(!actualizado) return res.send({error: "Producto no encontrado"});
    res.send({status:"succes", message: "Producto Actualizado"});

});


app.delete('/api/products/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const eliminado = managerCarrito.deleteProduct(userId);
    if(!eliminado) return res.send({error: "Producto no encontrado"});
    res.send({status:"succes", message: "Producto Eliminado"});
    
});*/

