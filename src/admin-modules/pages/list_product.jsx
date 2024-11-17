import React, { useEffect, useState } from "react";
import "../styles/list_product.css";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../data/product_data";

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    const handleEdit = ({ product }) => {
        navigate("/admin/product/edit", {
            state: { product }
        })
    }

    useEffect(
        () => {
            getAllProducts().then(
                (allProducts) => {
                    setProducts(allProducts)
                }
            );
        },
        []
    )

    const handleDelete = async ({ product }) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product : " + product.name + "?")
        console.log(confirmDelete)
        if (confirmDelete) {
            await deleteProduct({ productId: product.id })
            alert("Product deleted successfully")
            navigate(0)
        }
    }

    return (
        <div className="ProductList">
            <div className="ProductListHeader">
                <h2>Product List</h2>
                <div className="AddProductButton">
                    <button onClick={() => navigate("/admin/product/add")}>Add Product</button>
                </div>
            </div>
            {products.length > 0 ? (
                <ul className="ProductListItems">
                    {products.map((product) => (
                        <li key={product.id} className="ProductListItem">
                            <div className="ProductListCard">
                                <div className="ProductListImage">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="ProductDetails">
                                    <>
                                        <p className="ProductID">ID: {product.id}</p>
                                        <h3 className="ProductName">{product.name}</h3>
                                        <p className="ProductDescription">{product.description}</p>
                                        <p className="ProductPrice">₹ {product.price}</p>
                                        <button className="EditButton" onClick={() => handleEdit({ product })}>Edit</button>
                                        <button className="DeleteButton" onClick={() => handleDelete({ product })}>Delete</button>
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
