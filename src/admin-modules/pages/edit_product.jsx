import { useLocation, useNavigate } from "react-router-dom"
import ProductForm from "../components/product_form"
import { useEffect, useState } from "react"
import { updateProduct } from "../../data/product_data"

const EditProduct = () => {
    const location = useLocation()
    const [product, setProduct] = useState([])
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)


    useEffect(
        () => {
            if (location.state && location.state.product) {
                setProduct(location.state.product)
                console.log("product, ", product)

            }
        },
        [location]
    )
    useEffect(
        () => {
            setName(product.name)
            setImage(product.image)
            setDescription(product.description)
            setPrice(product.price)
        },
        [product]
    )
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log({name, image, description, price})
        if(!name || !image || !description || !price){
            alert("Please fill all the fields")
            return
        }
        await updateProduct({id: product.id, name, image, description, price})
        alert("Product updated successfully")
        navigate(-1)
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