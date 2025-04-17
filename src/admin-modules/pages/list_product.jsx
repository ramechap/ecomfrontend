import React, { useEffect, useState } from "react";
import "../styles/list_product.css";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../data/product_data";
import ImageWithLoader from "../../components/image_with_loader";
import { UseProductContext } from "../../usecontext/usecontext";

const ListProduct = () => {
    const {Allproduct,handleDeleteProduct}=UseProductContext()
  
    const navigate = useNavigate()
    const handleEdit = ({ product }) => {
        navigate("/admin/product/edit", {
            state: { product }
        })
    }

    
    const handleDelete = async ({ product }) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product : " + product.title + "?")
      
        if (confirmDelete) {
          await  handleDeleteProduct(product._id)
         
            
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
            {Allproduct.length > 0 ? (
                <ul className="ProductListItems">
                    {Allproduct.map((product) => (
                        <li key={product.id} className="ProductListItem">
                            <div className="ProductListCard">
                                <div className="ProductListImage">
                                    <ImageWithLoader width={150} imageUrl={product.photourl} alternativeText={product.title} />
                                </div>
                                <div className="ProductDetails">
                                    <>
                                        <p className="ProductID">ID: {product._id}</p>
                                        <h3 className="ProductName">{product.title}</h3>
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
