import { UseProductContext } from '../usecontext/usecontext'
import './cart.css'
import CartCard from './cart_card'
export default function Cart() {
    const {Allcart,handleDeleteToCartClick}=UseProductContext()
    return (
        <div className="CartPage">
            <div className="CartListHeader">
                <h2>Cart List</h2>
            </div>
            <ul className="CartListItems">
           { Allcart.map((Cart) => (
                    <CartCard key={Cart.id} Cart={Cart} handleDeleteToCartClick={handleDeleteToCartClick} />
                ))}
            </ul>
            <div className="CheckoutButtonContainer">
                <button className="CheckoutButton">Checkout</button>
            </div>
        </div>
    )
}