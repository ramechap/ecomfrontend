import "../styles/navbar.css"
import { MdAddHomeWork } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <div className="Navbar">
            {/* for logo */}
            <div className="Logo">
                <Link to="/">
                    <MdAddHomeWork className="icon"/>
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
                <Link to={"/admin/product/list"}>
                    <p>Admin</p>
                </Link>
            </div>
            {/* for icons */}
            <div className="Icons">
                <Link to={"/search"}>
                    <FaSearch className="icon"/>
                </Link>
                <Link to={"/cart"}>
                    <FaCartShopping className="icon"/>
                </Link>
            </div>
        </div>
    )
}
export default Navbar