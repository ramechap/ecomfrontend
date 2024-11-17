const ProductCard =  ({product, onClickAddToCart})=>{
    return (
        <div className="ProductCard">
            <div className="ProductImage">
                <img alt="pizza" src={product.image}/>
            </div>
            <div className="ProductDetails">
                <p className="ProductName">{product.name}</p>
                <p className="ProductDescription">{product.description}</p>
                <p className="ProductPrice">Rs. {product.price}</p>
            </div>
            <div className="AddToCart">
                <button onClick={onClickAddToCart}>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductCard