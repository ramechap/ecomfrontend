import { useEffect, useState } from "react"
import ProductCard from "../components/product_card"
import "../styles/product.css"
import { getAllProducts } from "../data/product_data"
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
    return (
        <div className="ProductMain">
            <h1 className="ProductHeading">Our Products</h1>
            <p className="ProductSlogan">We make your food experience better & more delicious.</p>
            <div className="ProductCardsGrid">
                {
                    allProducts.length > 0 ?
                        allProducts.map(
                            (product) => <ProductCard product={product} key={product.id} />
                        )
                        : <div id="no-product-found">No Products Found!!!</div>
                }
            </div>
        </div>
    )
}
export default ProductPage