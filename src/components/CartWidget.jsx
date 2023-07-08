import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css"

const CartWidgedt = () => {
    const { cartQuantity } = useContext(CartContext);
    return (
        <div className="cart-widget">
            <AiOutlineShoppingCart className="cart"/>
            <span className="cart-notification">{cartQuantity}</span>
        </div>
    );
};

export default CartWidgedt