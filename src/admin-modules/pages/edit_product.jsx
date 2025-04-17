import { useLocation, useNavigate } from "react-router-dom"
import ProductForm from "../components/product_form"
import { useEffect, useState } from "react"
import { updateProduct } from "../../data/product_data"
import { UseProductContext } from "../../usecontext/usecontext"
import axios from "axios"
import { showErrorToast, showSuccessToast } from "../../utils/toast_utils"

const EditProduct = () => {
    const {user}=UseProductContext()

    const location = useLocation()
    const [product, setProduct] = useState([])
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)


    useEffect(
        () => {
            if (location.state ) {
                setProduct(location.state.product)
             
                

            }
        },
        [product]
    )
    useEffect(
        () => {
            setName(product.title)
            setImage(product.photourl)
            setDescription(product.description)
            setPrice(product.price)
        },
        [product]
    )
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!name || !image || !description || !price){
            alert("Please fill all the fields")
            return
        }
         
        try {
            // Sending the user._id as a query parameter
            const response = await axios.put(
              `https://ecommerce-food-api.onrender.com/product/update/${product._id}?author=${user._id}`,{ title: name, photourl:image, description:description, price:price},
              { withCredentials: true }
            );
            showSuccessToast({
              message: `Updated the product`,
            });
            navigate("/admin/product/list")
          } catch (error) {
            showErrorToast({ message: 'Error updateing product ' });
          
          }
        
         
          
        
       
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ProductForm
                    name={name}
                    image={image}
                    description={description}
                    price={price}
                    onChangeName={(e) => setName(e.target.value)}
                    onChangeImage={(e) => setImage(e.target.value)}
                    onChangeDescription={(e) => setDescription(e.target.value)}
                    onChangePrice={(e) => setPrice(e.target.value)}
                />
            </form>
        </div>
    )
}

export default EditProduct