import "../styles/navbar.css"

import { FaCartShopping } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UseProductContext } from "../usecontext/usecontext";
const Navbar = () => {
      
    const { user, authenticated, setAuthenticated,isAdmin } = UseProductContext()
    const navigate = useNavigate()
    const logout = async () => {
        try {
            const user = await axios.get(`http://localhost:5000/auth/logout`, { withCredentials: true })
            alert("Logout Successfull")
            navigate("/login")
            setAuthenticated(false)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="Navbar">
            {/* for logo */}
            <div className="Logo">
                <Link to="/">
                    <IoFastFoodOutline className="icon" />
                </Link>
            </div>
            {/* for menus */}
            <div className="Menus">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to={"/products"}>
                    <p>Products</p>
                </Link>
                {isAdmin &&<Link to={"/admin/product/list"}>
                    <p>Admin</p>
                </Link>}
            </div>
            {/* for icons */}
            <div className="Icons">
                {user && authenticated ?
                    <Link onClick={logout} >
                        <IoIosLogOut className="icon" />
                    </Link>
                    :<><Link to={"/login"} >
                    <RiLoginCircleFill className="icon" />
                </Link></>
                }
               
                <Link to={"/cart"}>
                    <FaCartShopping className="icon" />
                </Link>
            </div>
        </div>
    )
}
export default Navbar