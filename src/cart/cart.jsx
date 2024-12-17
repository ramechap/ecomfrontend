import './cart.css'
import CartCard from './cart_card'
export default function Cart() {
    return (
        <div className="CartPage">
            <div className="CartListHeader">
                <h2>Cart List</h2>
            </div>
            <ul className="CartListItems">
                {[{
                    id: 1,
                    name: "Pizza",
                    description: "A delicious pizza",
                    price: 10,
                    image: "https://via.placeholder.com/150"
                },
                {
                    id: 2,
                    name: "Burger",
                    description: "A delicious burger",
                    price: 5,
                    image: "https://via.placeholder.com/150"
                },
                {
                    id: 3,
                    name: "Pasta",
                    description: "A delicious pasta",
                    price: 8,
                    image: "https://via.placeholder.com/150"
                }
                ].map((Cart) => (
                    <CartCard key={Cart.id} Cart={Cart} />
                ))}
            </ul>
            <div className="CheckoutButtonContainer">
                <button className="CheckoutButton">Checkout</button>
            </div>
        </div>
    )
}