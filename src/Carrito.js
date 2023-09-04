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
    getProducts() {
        if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            return this.#products;
        } else {
            console.log("No se pudo leer archivo. Verificar que el archivo exista");
        }
        
    }*/
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
    }

*/
    addCarrito(carritoNuevo){

        this.products = [];
        let nuevoCarrito = [];

        const existeFile = fs.existsSync(this.#path);

        if(!existeFile){

            fs.writeFileSync(this.#path, '[]', 'utf-8');
            console.log("El archivo no existia pero ya fue creado");
        } else {
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            nuevoCarrito ={
                id: this.#products.length +1,
                products: []
            }
            this.#products.push(nuevoCarrito);
            fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
            return nuevoCarrito;
        }
        
    }

/*
    getProductByID(idBuscado) {//let id_e;
        let number_id, id_e;
        let objeto_e = [];
        if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            //return this.#products;
            objeto_e = [...this.#products];
            const encontrado = objeto_e.findIndex( productos => productos.id === idBuscado);

            if(encontrado !== -1){
                id_e = true;
            }
            if(id_e) {
                console.log(objeto_e[encontrado])
                return objeto_e[encontrado];
            } else {
                console.log("Not Found");
            }
        } else {
            console.log("No se pudo leer archivo. Verificar que el archivo exista");
        }
    }

    updateProduct(id, act){

        if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            //return this.#products;
            const actproductos = [...this.#products];
            const existe = actproductos.findIndex( productos => productos.id === id); 
            if(existe !==-1) {
                actproductos[existe] = {...actproductos[existe], ...act}
                this.#products = actproductos;
                fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2), 'utf-8');
                console.log(`El producto con id: ${id} se actualizó correctamente`);
                return true;
                };
                

            } else {
                console.log("No se encuentra ese ID");
            }
    }

    deleteProduct(id) {

        if(fs.existsSync(this.#path)){
            const lecturaProductos = fs.readFileSync(this.#path,'utf-8')
            this.#products = JSON.parse(lecturaProductos);
            //return this.#products;
            const existe = this.#products.findIndex( productos => productos.id === id); 

            if(existe) {
                const filtrado = this.#products.filter(productos => productos.id !== id)
                console.log(filtrado)
                console.log(`El producto con id: ${id} se eliminó correctamente`);
                fs.writeFileSync(this.#path, JSON.stringify(filtrado, null, 2), 'utf-8');
                return true;
            }
        
        } else {
        console.log("No se encuentra ese ID");
        }
    }*/

}



export default CarritoManager; //define como export default productmanager
