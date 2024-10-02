import React, { useState } from "react";
import "../styles/list_product.css";
import { Navigate, useNavigate } from "react-router-dom";

const ListProduct = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Pizza",
            imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Delicious cheese pizza with fresh ingredients.",
            price: 199
        },
        {
            id: 2,
            name: "Burger",
            imageUrl: "",
            description: "Juicy beef burger with lettuce and cheese.",
            price: 249
        },
        {
            id: 3,
            name: "Pasta",
            imageUrl: "",
            description: "Creamy Alfredo pasta with mushrooms and chicken.",
            price: 299
        }
    ]);
    const navigate = useNavigate()
    const handleEdit = ({product})=>{
        navigate("/admin/product/edit", {
            state: {product}
        })
    }

    const handleDelete =({product}) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this product : "+product.name+"?")
        console.log(confirmDelete)
    }

    return (
        <div className="ProductList">
            <h2>Product List</h2>
            {products.length > 0 ? (
                <ul className="ProductListItems">
                    {products.map((product) => (
                        <li key={product.id} className="ProductListItem">
                            <div className="ProductListCard">
                                <div className="ProductImage">
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                                <div className="ProductDetails">
                                    <>
                                        <p className="ProductID">ID: {product.id}</p>
                                        <h3 className="ProductName">{product.name}</h3>
                                        <p className="ProductDescription">{product.description}</p>
                                        <p className="ProductPrice">₹ {product.price}</p>
                                        <button className="EditButton" onClick={()=>handleEdit({product})}>Edit</button>
                                        <button className="DeleteButton" onClick={() => handleDelete({product})}>Delete</button>
                                    </>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ListProduct;
