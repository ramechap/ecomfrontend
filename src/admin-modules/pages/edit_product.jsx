import { useLocation } from "react-router-dom"
import ProductForm from "../components/product_form"
import { useEffect, useState } from "react"

const EditProduct = ()=>{
    const location = useLocation()
    const [product, setProduct] = useState(null)

    useEffect(
        ()=>{
            if(location.state && location.state.product){
                setProduct(location.state.product)
            }
        },
        [location]
    )
    return(
        <div>
            <form>
                <ProductForm product={product}/>
            </form>
        </div>
    )
}

export default EditProduct