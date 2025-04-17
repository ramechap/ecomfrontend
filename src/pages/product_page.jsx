import ProductCard from "../components/product_card"
import "../styles/product.css"
import { UseProductContext } from "../usecontext/usecontext"
const ProductPage = () => {

    const {Allproduct,handleAddToCartClick}=UseProductContext()

    
    return (
        <div className="ProductMain">
            <h1 className="ProductHeading">Our Foods</h1>
            <p className="ProductSlogan">We make your food experience better & more delicious.</p>
            <div className="ProductCardsGrid">
                {
                    Allproduct.length > 0 ?
                    Allproduct.map(
                            (product) => <ProductCard product={product} key={product.id} onClickAddToCart={handleAddToCartClick} />
                        )
                        : <div id="no-product-found">No Products Found!!!</div>
                }
            </div>
        </div>
    )
}
export default ProductPage