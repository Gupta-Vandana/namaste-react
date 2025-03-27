import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return (<div className="text-center m-10 p-4 flex-wrap">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
            <ItemList item={cartItems} />
        </div>
        <button className=" p-2 m-2 bg-black text-white rounded-2xl text-2xl font-bold" onClick={handleClearCart}>
             Clear cart
        </button>
    </div>)
}

export default Cart;