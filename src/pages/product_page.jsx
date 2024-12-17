import { useEffect, useState } from "react"
import ProductCard from "../components/product_card"
import "../styles/product.css"
import { getAllProducts } from "../data/product_data"
import { showErrorToast, showInfoToast, showWarningToast } from "../utils/toast_utils"
const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(
        () => {
            getAllProducts().then(
                (allProducts) => {
                    setAllProducts(allProducts)
                }
            );
        },
        []
    )

    const handleAddToCartClick = (quantity)=>{
        console.log("quanity inside product page: ", quantity)
        if(quantity <= 0){
            console.log("quantity less than or equal to zero")
            showErrorToast({message:"quantity must be greater than zero to add to cart"})
            return
        }
    }
    return (
        <div className="ProductMain">
            <h1 className="ProductHeading">Our Foods</h1>
            <p className="ProductSlogan">We make your food experience better & more delicious.</p>
            <div className="ProductCardsGrid">
                {
                    allProducts.length > 0 ?
                        allProducts.map(
                            (product) => <ProductCard product={product} key={product.id} onClickAddToCart={handleAddToCartClick} />
                        )
                        : <div id="no-product-found">No Products Found!!!</div>
                }
            </div>
        </div>
    )
}
export default ProductPage