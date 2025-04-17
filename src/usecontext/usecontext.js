import React, { useContext, useEffect, useState } from 'react';
import ThemeContexts from './createcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showErrorToast, showSuccessToast } from '../utils/toast_utils';

export default function ThemeProviders({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setisAdmin] = useState(false)
  const [user, setuser] = useState("")
  const [Allproduct, setAllproduct] = useState([])
  const [Allcart, setAllcart] = useState([])


  useEffect(() => {

    const AllProduct = async () => {
      try {

        const response = await axios.get("http://localhost:5000/product/getallpost", {

        });

        setAllproduct(response.data.post)



      } catch (error) {

        showErrorToast({ message: error })
      }
    }
    AllProduct()



  }, [Allproduct]);
  useEffect(() => {
    const Profile = async () => {
      try {

        const response = await axios.get("http://localhost:5000/auth/profile", {
          withCredentials: true,
        });

        setuser(response.data)

        setAuthenticated(true);



      } catch (error) {
        setAuthenticated(false);
        showErrorToast({ message: error })
      }
    }
    Profile()



  }, [user]);
  useEffect(() => {
    const IsAdmin = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/checkadmin", {
          withCredentials: true, // Make sure cookies are sent with the request
        });
        if (response.status === 200) {
          setisAdmin(true);
          
        } else {
          setisAdmin(false);
        }
      } catch (error) {
        setisAdmin(false);
       
      }
    }
    IsAdmin()



  }, [isAdmin]);

  const handleAddToCartClick = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/product/addtocart/${id}`,
        { author: user._id }, // Pass the user ID or whatever data is needed
        { withCredentials: true } // Ensure credentials (cookies, tokens) are sent
      );
      showSuccessToast({
        message: `${user.username}, you added the product to your cart.`,
      });
    } catch (error) {
      console.log('Error:', error);
      showErrorToast({ message: 'Error adding product to cart' });
    }
  };
  const handleDeleteToCartClick = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/product/deletefromcart/${id}`,
        { author: user._id },
        { withCredentials: true }
      );
      showSuccessToast({
        message: `${user.username}, you removed the product from your cart.`,
      });
    } catch (error) {
      console.log('Error:', error);
      showErrorToast({ message: 'Error adding product to cart' });
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      // Sending the user._id as a query parameter
      const response = await axios.delete(
        `http://localhost:5000/product/delete/${id}?author=${user._id}`,
        { withCredentials: true }
      );
      showSuccessToast({
        message: `Deleted the product`,
      });
    } catch (error) {
      showErrorToast({ message: 'Error deleting product ' });
      console.error("Error deleting product: ", error);
    }
  };


  useEffect(() => {
    const GetAllCart = async () => {
      try {

        const response = await axios.get(`http://localhost:5000/product/alladdtocart?author=${user._id}`, {
          withCredentials: true,
        });

        setAllcart(response.data.post);
      } catch (error) {
        console.error("Error fetching cart:", error);
        showErrorToast({ message: error.message || "Failed to fetch cart items" });
      }
    };

    if (user._id) {
      GetAllCart();
    }
  }, [user]); // Re-run this effect when the user changes

  return (
    <ThemeContexts.Provider value={{ authenticated, setAuthenticated, user, Allproduct, Allcart, handleAddToCartClick,handleDeleteProduct, handleDeleteToCartClick,isAdmin }}>
      {children}
    </ThemeContexts.Provider>
  );
}

const UseProductContext = () => {
  return useContext(ThemeContexts);
};

export { UseProductContext };
