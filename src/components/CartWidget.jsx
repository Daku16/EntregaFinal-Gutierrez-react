import { AiOutlineShoppingCart } from "react-icons/ai"
import "../App.css"

const CartWidgedt = () => {
    return (
        <div className="cart-widget">
            <AiOutlineShoppingCart className="cart"/>
            <span className="cart-notification">0</span>
        </div>
    );
};

export default CartWidgedt