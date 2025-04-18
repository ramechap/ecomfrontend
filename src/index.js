import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductPage from './pages/product_page';
import Cart from './cart/cart';


import LoginUser from './pages/login';
import RegisterUser from './pages/register';
import ThemeProviders from './usecontext/usecontext';
import ProtectedRoute from './protected/protectedroute';
import AdminRoute from './admin-modules/route/adminroute';
import Practroute from './prac1/practroute';
import SearchProduct from './pages/seachproduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProviders>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<ProductPage/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='login' element={<LoginUser/>}/>
          <Route path='register' element={<RegisterUser/>}/>
          <Route path='filterproduct' element={<SearchProduct/>}/>
           {/* Protected Admin Routes */}
           {/* <Route path="/prac1/*" element={<Practroute />} /> */}
           <Route path="/admin/*" element={<AdminRoute />} />
           

           
          
         
          
        </Route>
      </Routes>
    </BrowserRouter>

    </ThemeProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();