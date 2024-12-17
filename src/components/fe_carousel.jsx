import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/fe_carousel.css"
import Pizza from "../assets/pizza.avif"
import ImageWithLoader from "./image_with_loader"
const FeCarousel = ()=>{
    return(
        <Carousel autoPlay infiniteLoop showThumbs={false} dynamicHeight={false}>
            <div className="fe-carousel">
                <ImageWithLoader alternativeText="Buff momo" imageUrl="https://plus.unsplash.com/premium_photo-1661600407445-f672740d5c53?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <p className="legend">Buff MO:MO</p>
            </div>
            <div className="fe-carousel">
                <ImageWithLoader alt="Pizza here" imageUrl={Pizza}/>
                <p className="legend">Pizza World</p>
            </div>
        </Carousel>
    )
}
export default FeCarousel