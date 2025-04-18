import axios from "axios"
import ProductCard from "../components/product_card"
import "../styles/product.css"
import { UseProductContext } from "../usecontext/usecontext"
import { useEffect } from "react"

const SearchProduct = () => {

    const { setsearchallproduct,Allcart, handleAddToCartClick,searchallproduct,minprice,setminprice,maxPrice,setmaxPrice,search,setsearch } = UseProductContext()
    
    
    const handleSearch = async (e) => {
        e.preventDefault();  

        try {
           
            let url = "https://ecommerce-food-api.onrender.com/product/searchproduct?";
            if (search) {
                // If search is provided, fetch filtered products
                url += `title=${search}&`;
                if (minprice) url += `minPrice=${minprice}&`;
                if (maxPrice && maxPrice !== Infinity) url += `maxPrice=${maxPrice}&`;
                url = url.endsWith('&') ? url.slice(0, -1) : url;
              } else {
                // If search is empty, fetch all products
                url = "https://ecommerce-food-api.onrender.com/product/getallpost";
              }
        // if (search) url += `title=${search}&`; 
        // if (minprice) url += `minPrice=${minprice}&`; 
        // if (maxPrice) url += `maxPrice=${maxPrice}&`; 

       
       

        
        const response = await axios.get(url);
            // const response = await axios.get("https://ecommerce-food-api.onrender.com/product/searchproduct", {
            //     params: {
            //         title: search,
            //         minPrice: minprice,
            //         maxPrice: maxPrice !== Infinity ? maxPrice : undefined 
            //     }
            // });

            
            setsearchallproduct(response.data.post);

        } catch (error) {
            console.error("Error fetching products:", error);
           
        }
    };

    return (
        <div className="ProductMain">
            <h1 className="ProductHeading">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="search-container position-relative">
                                <form onSubmit={handleSearch} className="d-flex align-items-center">
                                    
                                    <input value={search} onChange={(e)=>setsearch(e.target.value)}
                                        className="form-control search-input ps-5"
                                        type="search"
                                        placeholder="Search anything..."
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-search ms-2" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </h1>
            <div className="price-filter">
                <label>Price Range:</label>
                <div className="d-flex">
                    
                    <input
                        type="number"
                        className="form-control"
                        value={maxPrice === Infinity ? '' : maxPrice}
                        onChange={(e) => setmaxPrice(Number(e.target.value) || Infinity)}
                        placeholder="Max Price"
                    />
                </div>
            </div>
            <div className="ProductCardsGrid">
                {
                    searchallproduct.length > 0 ?
                    searchallproduct.map(
                            (product) => <ProductCard product={product} key={product.id} onClickAddToCart={handleAddToCartClick} />
                        )
                        : <div id="no-product-found">No Products Found!!!</div>
                }
            </div>
        </div>
    )
}
export default SearchProduct