import { useState } from "react"
import ProductCard from "../components/product_card"
import "../styles/product.css"
const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: "Pizza",
            price: 199,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae ipsum aperiam temporibus sed fugiat consequuntur deserunt, esse odio voluptates dolor nam optio neque error suscipit aspernatur labore corporis! Nisi."
        },
        {
            id: 2,
            name: "Buff MO:MO",
            price: 200,
            image: "",
            description: "Buff MO:MO is best in Nepal",
        },
        {
            id: 3,
            name: "Chowmin",
            price: 120,
            image: "",
            description: "Chowmin is the chowmin of Nepal",
        },
    ])
    return (
        <div className="ProductMain">
            <h1 className="ProductHeading">Our Products</h1>
            <p className="ProductSlogan">We make your food experience better & more delicious.</p>
            <div className="ProductCardsGrid">
                {
                    allProducts.map(
                        (product) => <ProductCard />
                    )
                }
            </div>
        </div>
    )
}
export default ProductPage