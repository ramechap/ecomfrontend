import QuantitySelector from "./quantity_selector"
import ImageWithLoader from "./image_with_loader"
import { useState } from "react"

const ProductCard = ({ product, onClickAddToCart }) => {
    const [quantity, setQuantity] = useState(0)
    const handleOnChangeQuantity = (quantity) => {
        console.log(`Quantity changed to ${quantity}`)
        setQuantity((prev)=>quantity)
    }

    return (
        <div className="ProductCard">
            <div className="ProductImage">
                {/* <img alt="Image Here" src={product.image} onError={onImgErrorSmall}/> */}
                <ImageWithLoader imageUrl={product.image} alternativeText={product.name} />
            </div>
            <div className="ProductInfoQuantiy">
                <div className="ProductDetails">
                    <p className="ProductName">{product.name}</p>
                    <p className="ProductDescription">{product.description}</p>
                    <div className="ProductPriceRow">
                        <p className={(product.discountedPrice > 0 ? "line-through" : "ProductPrice")}>Rs.{product.price}</p>
                        <p className="line-through">Rs.{product.discountedPrice > 0 ? product.discountedPrice : 0}</p>
                    </div>
                </div>
                <div className="ManageQuantity">
                    <QuantitySelector onChange={handleOnChangeQuantity} vertical={true} />
                </div>
            </div>
            <div className="AddToCart">
                <button onClick={()=>onClickAddToCart(quantity)}>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductCard