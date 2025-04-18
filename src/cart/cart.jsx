import { useEffect, useState } from 'react'
import { UseProductContext } from '../usecontext/usecontext'
import './cart.css'

import CartCard from './cart_card'
export default function Cart() {
    const { Allcart, handleDeleteToCartClick ,user, authenticated,} = UseProductContext()
    const [total, settotal] = useState(0)
   

    useEffect(() => {
        // Recalculate the total whenever Allcart changes
        const calculatedTotal = Allcart.reduce((acc, Cart) => {
            return acc + Cart.product.price * Cart.quantity;
        }, 0);

        settotal(calculatedTotal);
    }, [Allcart]); // This hook runs every time Allcart changes
    // useEffect(() => {
    //     const calculatedTotal = Allcart.reduce((acc, Cart) => {
    //         return acc + Cart.product.price * Cart.quantity;
    //       }, 0);
        
       
    //     // Allcart.forEach((Cart) => {
    //     //     calculatedTotal += Cart.product.price * Cart.quantity;
    //     // });
       
    //     settotal(calculatedTotal)
       
    // }, [calculatedTotal])



    return (
        <div className="CartPage">
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Checkout Your Ship</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="col-xl-4">
                                <div className="card checkout-order-summary">
                                    <div className="card-body">

                                        <div className="table-responsive">
                                            <table className="table table-centered mb-0 table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th className="border-top-0" style={{ width: 110 }} scope="col">
                                                            Product
                                                        </th>
                                                        <th className="border-top-0" scope="col">
                                                            Product Desc
                                                        </th>
                                                        <th className="border-top-0" scope="col">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                               
                                                <tbody>
                                                    {Allcart.map((Cart) =>{
                                                      
                                                        return(
                                                            <tr>
                                                            <th scope="row">
                                                                <img style={{ width: "100px" }}
                                                                    src={Cart.product.photourl}
                                                                    alt="product-img"
                                                                    title="product-img"
                                                                    className="avatar-lg rounded"
                                                                />
                                                            </th>
                                                            <td>
                                                                <h5 style={{ whiteSpace: "initial" }} className="font-size-16 text-truncate">

                                                                    {Cart.product.title}

                                                                </h5>

                                                                <p className="text-muted mb-0 mt-1">$ {Cart.product.price} x {Cart.quantity}</p>
                                                            </td>
                                                            <td>$ {Cart.product.price * Cart.quantity}</td>
                                                        </tr>

                                                        )
                                                    })}
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <h5 className="font-size-14 m-0">Sub Total :</h5>
                                                        </td>
                                                        <td> ${total} </td>
                                                    </tr>

                                                    <tr>
                                                        <td colSpan={2}>
                                                            <h5 className="font-size-14 m-0">Shipping Charge :</h5>
                                                        </td>
                                                        <td> $ 25</td>
                                                    </tr>

                                                    <tr className="bg-light">
                                                        <td colSpan={2}>
                                                            <h5 className="font-size-14 m-0">Total:</h5>
                                                        </td>
                                                        <td> $ {total+25}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                           
                            <button type="button" class="btn btn-primary">Paynow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CartListHeader">
                <h2>Cart List</h2>
            </div>
            {user && authenticated ? <></>: <p className="ProductSlogan">Please Login First</p>}
            <ul className="CartListItems">
                {Allcart.map((Cart) => (
                    <CartCard key={Cart.id} Cart={Cart} handleDeleteToCartClick={handleDeleteToCartClick} />
                ))}
            </ul>
            {user && authenticated ?<div className="CheckoutButtonContainer">
                <button type="button" data-toggle="modal" data-target="#exampleModalCenter" className="CheckoutButton">Checkout</button>
            </div>:<></>}
            
        </div>
    )
}