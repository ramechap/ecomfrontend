import React, { useContext } from 'react'
import AddProduct from '../pages/add_product'
import EditProduct from '../pages/edit_product'
import ListProduct from '../pages/list_product'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { UseProductContext } from '../../usecontext/usecontext'


export default function AdminRoute() {
    const { isAdmin } = UseProductContext(); // Ensure context is properly providing isAdmin
    const navigate= useNavigate()
    // If isAdmin is still null (i.e., loading or user authentication is not complete), show a loading state.
    if (isAdmin === null) {
        return <div>Loading...</div>;
    }

    // If the user is not an admin, redirect to home page.
    if (!isAdmin) {
        navigate("/")
    }
    return (
        <Routes>
            
                
                    <Route path="product/add" element={<AddProduct />} />
                    <Route path="product/edit" element={<EditProduct />} />
                    <Route path="product/list" element={<ListProduct />} />
               





        </Routes>
    )
}
