import { productDB } from "../utils/local_db"
import { productTableName } from "../utils/local_db_table_list"
import { v4 as newUUID4 } from "uuid"

export const getAllProducts = async()=>{
    try{
        const allProducts = await productDB.getItem(productTableName)
        return allProducts || []
    }catch(e){
        console.error("Error while fetching products", e)
    }
}
export const addProduct = async({name, price, image, description})=>{
    try{
        //generating random uuid
        const newId = newUUID4();
        //creating new product
        const newProduct = {
            id: newId,
            name: name,
            price: price,
            image: image,
            descripiton: description,
        }
        //getting all producst from local db
        const allProducts = await productDB.getItem(productTableName) || []
        ///adding new product to existing array of products
        allProducts.push(newProduct)
        //updating local db with new array of products
        await productDB.setItem(productTableName, allProducts)
    }catch(e){
        console.error("Error while adding product", e)
    }
}

export const updateProduct = async({id, name, price, image, description})=>{
    try{
        //getting all products for finding the index to update
        const allProducts = await productDB.getItem(productTableName) || []
        //finding index of product with the given id
        const index = allProducts.findIndex(
            (product)=>{
                return product.id === id;
            }
        )
        if(index === -1){
            throw new Error("Product not found")
        }
        ///creating product object with id
        const productToUpdate = {
            id: id,
            name: name,
            price: price,
            image: image,
            description: description,
        }
        ///updating to the array at found index
        allProducts[index] = productToUpdate
        //update to the local db with new array of products
        await productDB.setItem(productTableName, allProducts)
    }catch(e){
        console.error("Error while updating product", e)
    }
}

//delete product
export const deleteProduct = async({productId})=>{
    try{
        ///getting all products
        const allProducts = await productDB.getItem(productTableName) || []
        //filtering the allProducts array with the given product id
        const filteredProducts = await allProducts.filter(
            (product)=>{
                return product.id !== productId
            }
        );
        //updating local db with new array of products
        await productDB.setItem(productTableName, filteredProducts)
    }catch(e){
        console.error("Error while deleting product", e)
    }
}
