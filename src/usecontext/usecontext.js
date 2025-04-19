import React, { useContext, useEffect, useState } from 'react';
import ThemeContexts from './createcontext';
import ReactGA from "react-ga4";
import axios from 'axios';
import { showErrorToast, showSuccessToast } from '../utils/toast_utils';

export default function ThemeProviders({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setisAdmin] = useState(false)
  const [user, setuser] = useState("")
  const [Allproduct, setAllproduct] = useState([])
  const [Allcart, setAllcart] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [search, setsearch] = useState("")
  const [minprice, setminprice] = useState(0)
  const [maxPrice, setmaxPrice] = useState(Infinity)
const [searchallproduct, setsearchallproduct] = useState([])


  // useEffect(() => {

  //   const SearchAllProduct = async () => {
  //     try {

  //       let url = "https://ecommerce-food-api.onrender.com/product/searchproduct?";
        
  //       if (search) url += `title=${search}&`; 
  //       if (minprice) url += `minPrice=${minprice}&`; 
  //       if (maxPrice) url += `maxPrice=${maxPrice}&`; 

       
  //       url = url.endsWith('&') ? url.slice(0, -1) : url;

        
  //       const response = await axios.get(url);

  //       setsearchallproduct(response.data.post)



  //     } catch (error) {

  //       showErrorToast({ message: error })
  //     }
  //   }
  //   if (search || minprice || maxPrice !== Infinity) {
  //     SearchAllProduct(Allcart);
  //   }


  // }, [searchallproduct,search, minprice, maxPrice]);

  useEffect(() => {

    const AllProduct = async () => {
      try {

        const response = await axios.get("https://ecommerce-food-api.onrender.com/product/getallpost", {

        });

        setAllproduct(response.data.post)
       



      } catch (error) {

        showErrorToast({ message: error })
      }
    }
    AllProduct()



  }, [Allproduct]);
  useEffect(() => {

    const AllProduct = async () => {
      try {

        const response = await axios.get("https://ecommerce-food-api.onrender.com/product/getallpost", {

        });

       
        setsearchallproduct(response.data.post)
        if (!search ) {
              setsearchallproduct(response.data.post);
            }


      } catch (error) {

        showErrorToast({ message: error })
      }
    }
    AllProduct()



  }, []);

  useEffect(() => {
    const Profile = async () => {
      try {

        const response = await axios.get("https://ecommerce-food-api.onrender.com/auth/profile", {
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
        const response = await axios.get("https://ecommerce-food-api.onrender.com/auth/checkadmin", {
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
     await axios.put(
        `https://ecommerce-food-api.onrender.com/product/addtocart/${id}`,
        { author: user._id }, // Pass the user ID or whatever data is needed
        { withCredentials: true } // Ensure credentials (cookies, tokens) are sent
      );
      ReactGA.event({
        category: 'Cart', // You can customize the category
      action: 'Add cart',
      label: `Product ID: ${id}`, // Optionally, use the product name or ID as a label
      value: id,
       
      });
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
      await axios.put(
        `https://ecommerce-food-api.onrender.com/product/deletefromcart/${id}`,
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
       await axios.delete(
        `https://ecommerce-food-api.onrender.com/product/delete/${id}?author=${user._id}`,
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

        const response = await axios.get(`https://ecommerce-food-api.onrender.com/product/alladdtocart?author=${user._id}`, {
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
    <ThemeContexts.Provider value={{ searchallproduct,setsearchallproduct,minprice,setminprice,maxPrice,setmaxPrice,search,setsearch,authenticated, modalShow,setModalShow,setAuthenticated, user, Allproduct, Allcart, handleAddToCartClick,handleDeleteProduct, handleDeleteToCartClick,isAdmin }}>
      {children}
    </ThemeContexts.Provider>
  );
}

const UseProductContext = () => {
  return useContext(ThemeContexts);
};

export { UseProductContext };
