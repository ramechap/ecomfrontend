import ImageWithLoader from "../components/image_with_loader";
import QuantitySelector from "../components/quantity_selector";

export default function CartCard({ Cart,handleDeleteToCartClick }) {
    return (
        <li key={Cart.id} className="CartListItem">
            <div className="CartListCard">
                <div className="CartListImage">
                    <ImageWithLoader width={150} imageUrl={Cart.product.photourl} alternativeText={Cart.product.title} />
                </div>
                <div className="CartDetails">
                    <>
                        <p className="CartID">ID: {Cart.product._id}</p>
                        <h3 className="CartName">{Cart.product.title}</h3>
                        <p className="CartDescription">{Cart.product.description}</p>
                        <p className="CartPrice">₹ {Cart.product.price}</p>
                        <div className="CartActions">
                            <p>Quantity : {Cart.quantity}</p>
                            <button className="DeleteButton" onClick={()=>handleDeleteToCartClick(Cart.product._id)} >Delete</button>
                        </div>
                    </>
                </div>
            </div>
        </li>

    )
}