import { useState } from "react"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
export const SearchComponent = () => {
    const [searchInputText, setSearchInputText] = useState("");

    return (
        <div className="flex items-center m-4">
            <input
                type="text"
                className="border border-solid border-gray-400 px-2 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={searchInputText}
                onChange={(e) => {
                    setSearchInputText(e.target.value);
                }}
                placeholder="Search"
            />

            <button
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={(e) => {
                    // search/filter logic here
                    console.log(searchInputText);
                }}
            >
                Search
            </button>
        </div>
    );
};

const HeaderComponent = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div>
            <div className="header bg-red-400 flex">
                <div className="logo-container">
                    <img src={logo} className="w-[150px] rounded-2xl" alt="logo" />
                </div>

                <div className="flex items-center justify-around  w-full">
                    <span className="">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="">
                        <Link to="/about">About Us</Link>
                    </span>
                    <span className="">
                        <Link to="/contact-us">Contact</Link>
                    </span>
                    <span className=" font-bold">
                        <Link to="/cart">Cart: {cartItems.length}</Link>
                    </span> 
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;

