import ImageWithLoader from "../components/image_with_loader";
import QuantitySelector from "../components/quantity_selector";

export default function CartCard({ Cart }) {
    return (
        <li key={Cart.id} className="CartListItem">
            <div className="CartListCard">
                <div className="CartListImage">
                    <ImageWithLoader width={150} imageUrl={Cart.image} alternativeText={Cart.name} />
                </div>
                <div className="CartDetails">
                    <>
                        <p className="CartID">ID: {Cart.id}</p>
                        <h3 className="CartName">{Cart.name}</h3>
                        <p className="CartDescription">{Cart.description}</p>
                        <p className="CartPrice">₹ {Cart.price}</p>
                        <div className="CartActions">
                            <QuantitySelector onChange={null} />
                            <button className="DeleteButton" >Delete</button>
                        </div>
                    </>
                </div>
            </div>
        </li>

    )
}