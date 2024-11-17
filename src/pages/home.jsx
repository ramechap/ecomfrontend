import FeCarousel from "../components/fe_carousel"
import ProductPage from "./product_page"

const Home = () => {
    return (
        <div>
            <FeCarousel />
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <ProductPage />
            </div>
        </div>
    )
}
export default Home