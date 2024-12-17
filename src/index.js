import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductPage from './pages/product_page';
import AddProduct from './admin-modules/pages/add_product';
import EditProduct from './admin-modules/pages/edit_product';
import ListProduct from './admin-modules/pages/list_product';
import Cart from './cart/cart';
import Login from './admin-modules/pages/login';
import Register from './admin-modules/pages/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<ProductPage/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='/admin/product/add' element={<AddProduct/>}/>
          <Route path='/admin/product/edit' element={<EditProduct/>}/>
          <Route path='/admin/product/list' element={<ListProduct/>}/>
          <Route path='/admin/auth/login' element={<Login/>}/>
          <Route path='/admin/auth/register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();