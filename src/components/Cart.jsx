import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import ItemList from "./ItemList"
import { clearCart  } from "../utils/cartSlice"
const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    console.log(cartItems)
    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className=" m-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick ={handleClearCart}>Clear</button>
            {cartItems.length=== 0 && <h1>please order something !!!</h1>}
            <ItemList items = {cartItems}></ItemList>
        </div>
    </div>
}

export default Cart