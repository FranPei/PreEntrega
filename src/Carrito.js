//const fs = require('fs');
import fs from 'fs';
//const { describe } = require('node:test');
import { describe } from 'node:test';

    


class CarritoManager {

    #products = [];
    #path = 'carritos.json'

    constructor () {
        //this.#products = [];
      /*  if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            return this.#products;
        } else {
            fs.writeFileSync(this.#path, '[]', 'utf-8');
            console.log("Archivo Creado");
        }*/
    }
    /*
    addProductToCarrito(id_carrito, id_product){

        let carritoAct = [];

        if(fs.existsSync(this.#path)){
            const lecturaCarritos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaCarritos);
            //return this.#products;
            const actCarrito = [...this.#products];
            const existe = actCarrito.findIndex( carrito => carrito.id === id_carrito); 
            if(existe !==-1) {
                const existeproducto = actCarrito[existe].findIndex(producto => producto.id === id_product);
                if(!existeproducto){
                    
                } else {
                    actCarrito[existe][existeproducto].quantity = actCarrito[existe][existeproducto].quantity + data.cuantity;
                }
                //actCarrito[existe][existeproducto] = {...actproductos[existe], ...act}
                this.#products = actproductos;
                fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
                console.log(`El producto con id: ${id} se actualizó correctamente`);
                return true;
                };
            } else {
                console.log("No se encuentra ese ID de Carrito");
            }
    }*/
    
    addProductToCarrito(id_carrito, id_product){

        let carritoAct = [];
        let productsNew = {};

        if(fs.existsSync(this.#path)){
            const lecturaCarritos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaCarritos);
            carritoAct = [...this.#products];
            const existe = carritoAct.findIndex( carrito => carrito.id === id_carrito);
            productsNew = {
                id: this.#products.length + 1,
                quantity: 100
            }
            if(existe !== -1) {
                carritoAct[existe].push(productsNew);
                this.products.push(carritoAct);
                fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
            } else {
                console.log("No se encuentra ese ID de Carrito");
            }

        } else {
            console.log("No se puede abrir el archivo");
        }
    }
   




    
    
    /*
    addProducts(productnew){ //title, description, price, thumbnail, code, stock, status, category
        this.#products = [];

        const existeFile = fs.existsSync(this.#path);
        //const producto_n = JSON.parse(productnew);
        

        if(!existeFile){

            fs.writeFileSync(this.#path, '[]', 'utf-8');
            console.log("El archivo no existia pero ya fue creado");
        } else {
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            const existe = this.#products.find( productos => productos.code === productnew.code);
            //const codeProducto = this.#products.find(productos => productos.code === productnew.code);
            if (!existe) {
                productnew.id = this.#products.length + 1;
                //productnew = {...productnew,} this.#products.length + 1;
                this.#products.push(productnew);
                fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
                //console.log(`El producto: ${productnew.title} con id: ${producto.id} se agregó correctamente`);
                return productnew;
            } else {
                console.log(`El code no se puede repetir`);
                return;
            }
        }
    }*/



    addCarrito(carritoNuevo){

        this.products = [];
        let nuevoCarrito = [];

        const existeFile = fs.existsSync(this.#path);

        if(!existeFile){

            fs.writeFileSync(this.#path, '[]', 'utf-8');
            console.log("El archivo no existia pero ya fue creado");
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
        } else {
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
        }
        nuevoCarrito ={
            id: this.#products.length +1,
            products: []
        }
        this.#products.push(nuevoCarrito);
        fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
        return nuevoCarrito;
    }


    getCarritoByID(idBuscado) {//let id_e;
        let number_id, id_e;
        let carrito_e = [];
        if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            //return this.#products;
            carrito_e = [...this.#products];
            const encontrado = carrito_e.findIndex( carrito => carrito.id === idBuscado);

            if(encontrado !== -1){
                id_e = true;
            }
            if(id_e) {
                console.log(carrito_e[encontrado])
                return carrito_e[encontrado];
            } else {
                console.log("Not Found");
            }
        } else {
            console.log("No se pudo leer archivo. Verificar que el archivo exista");
        }
    }
    


}



export default CarritoManager; //define como export default productmanager
