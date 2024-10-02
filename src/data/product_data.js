import { productTableName } from "../utils/local_db_table_name";
import { productDB } from "../utils/localdb";
import { v4 as newUUID4 } from "uuid";

export const getProducts = async () =>{
    try{
        const allProducts = await productDB.getItem(productTableName);
        return allProducts || [];
    }catch(err){
        console.error("error on fetching products : ", err)
    }
}

export const saveProducts = async (product)=>{
    try{
        const newProduct = {...product, id: newUUID4()}
        const allProducts = productDB.getItem(productTableName) || []
        allProducts.push(newProduct)
        await productDB.setItem(productTableName, allProducts);
    }catch(err){
        console.error("error on adding products : ", err)
    }
}

export const updateProducts = async (updateProduct)=>{
    try{
        const products = await productDB.getItem(productTableName) || []
        const index = products.findIndex(product=> product.id === updateProduct.id)
        if(index !== -1){
            products[index] = updateProduct
            await productDB.setItem(productTableName, products)
        }else{
            console.error("product not found")
        }
    }catch(e){

    }
}

export const deleteProducts = async (productId)=>{
    try{
        const products = await productDB.getItem(productTableName) || []
        const filteredProducts = products.filter((prod)=>prod.id === productId)
        await productDB.setItem(productTableName, filteredProducts)
    }catch(err){
        console.error("error on deleting products : ", err)
    }
}