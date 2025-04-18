import { useLocation } from "react-router-dom"
import ProductCard from "../components/product_card"
import "../styles/product.css"
import { UseProductContext } from "../usecontext/usecontext"

const ProductPage = () => {
    const location = useLocation(); 
    const {Allproduct,handleAddToCartClick}=UseProductContext()
    const isHomePage = location.pathname === '/';
    
    
    return (
        <div className="ProductMain">
            <h1 className="ProductHeading">Our Foods</h1>
            <p className="ProductSlogan">We make your food experience better & more delicious.</p>
            <div className="ProductCardsGrid">
                {
                    Allproduct.length > 0 ?
                    (
                        isHomePage ? (
                            // Render only on the Home page
                            Allproduct.slice(0,4).map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                    onClickAddToCart={handleAddToCartClick}
                                />
                            ))
                        ) :(
                            Allproduct.map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                    onClickAddToCart={handleAddToCartClick}
                                />
                            )
                        )
                    )
                    )
                        : <div id="no-product-found">No Products Found!!!</div>
                }
            </div>
        </div>
    )
}
export default ProductPage