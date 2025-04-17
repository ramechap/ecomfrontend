import { useState } from "react"
import ProductForm from "../components/product_form"
import { addProduct, getAllProducts } from "../../data/product_data"
import { useNavigate } from "react-router-dom"

const AddProduct = ()=>{
    const [name, setName] =useState("")
    const [image, setImage] =useState("")
    const [description, setDescription] =useState("")
    const [price, setPrice] =useState(0)
        const navigate =useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        if(!name || !image || !description || !price){
            alert("Please fill all the fields")
            return
        }
        const res = await fetch("https://ecommerce-food-api.onrender.com/product/createpost", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
    
            body: JSON.stringify({
              title: name, photourl:image, description:description, price:price
            })
          })
          const ress = await res.json()
          
          navigate("/admin/product/list")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <ProductForm
                    name={name}
                    image={image}
                    description={description}
                    price={price}
                    onChangeName={(e)=>setName(e.target.value)}
                    onChangeImage={(e)=>setImage(e.target.value)} 
                    onChangeDescription={(e)=>setDescription(e.target.value)} 
                    onChangePrice={(e)=>setPrice(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AddProduct