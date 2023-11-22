import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
const Navbar=()=>{
    return(
        <div className="container mass">
            <div className="row">
                <div className="col-7">
                    <div className="navset">
                        <div className="nav-img">
                            <img src="./Images/swiggy-1.svg"></img>
                        </div>
                        <div className="cont">
                        <div className="oth">
                        <h5>Others</h5>
                        </div>
                        <div className="country">
                        <p>THORAIPAKKAM, TAMIL NADU, INDIA</p>
                        </div>
                        </div>
                       
                    </div>
                </div>
                <div className="col-1">
                    <div className="search">
                        <a href="#">
                        <FaSearch/>
                            Search
                        </a>
                    </div>
                </div>
                <div className="col-1">
                    <div className="offers">
                        <a href="#">
                        <BiSolidOffer/>
                            Offers
                        </a>
                    </div>
                </div>
                <div className="col-1">
                    <div className="help">
                        <a href="#">
                            <IoMdHelpBuoy/>
                            Help
                        </a>
                    </div>
                </div>
                <div className="col-1">
                    <div className="sign">
                        <a href="#">
                            <IoPersonSharp/>
                            Sign In
                        </a>
                    </div>
                </div> <div className="col-1">
                    <div className="cart">
                        <a href="#">
                            <TiShoppingCart/>
                            Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;