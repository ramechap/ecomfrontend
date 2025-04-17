import ImageWithLoader from "./image_with_loader"
import { UseProductContext } from "../usecontext/usecontext"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product, onClickAddToCart }) => {
    
    const { user, authenticated } = UseProductContext()
    const navigate=useNavigate()

    return (
        <div className="ProductCard">
            <div className="ProductImage">
                {/* <img alt="Image Here" src={product.image} onError={onImgErrorSmall}/> */}
                <ImageWithLoader imageUrl={product.photourl} alternativeText={product.title} />
            </div>
            <div className="ProductInfoQuantiy">
                <div className="ProductDetails">
                    <p className="ProductName">{product.title}</p>
                    <p className="ProductDescription">{product.description.slice(0,50)}..</p>
                    <div className="ProductPriceRow">
                        <p className={ "ProductPrice"}>$ {product.price}</p>
                    </div>
                </div>
               
            </div>
            <div className="AddToCart">
                <button onClick={()=>user && authenticated?onClickAddToCart(product._id):navigate("/login")}>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductCard