import "../styles/navbar.css"
import { MdAddHomeWork } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ()=>{
    return(
        <div className="Navbar">
            {/* for logo */}
            <div className="Logo">
                <MdAddHomeWork className="icon"/>
            </div>
            {/* for menus */}
            <div className="Menus">
                <p>Home</p>
                <p>Products</p>
                <p>About Us</p>
            </div>
            {/* for icons */}
            <div className="Icons">
                <FaSearch className="icon"/>
                <FaCartShopping className="icon"/>
            </div>
        </div>
    )
}
export default Navbar