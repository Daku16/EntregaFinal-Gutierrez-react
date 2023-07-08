import { CartContext } from "../context/CartContext"
import { useContext } from "react"
const AddItemButton = ({text, quantity}) => {
    const {cartQuantity, setCartQuantity, setCartDetail, CartDetailTemp} = useContext(CartContext)
    const handleAdd = () => {
        setCartQuantity(cartQuantity + quantity )
        CartDetailTemp.stock = cartQuantity
        setCartDetail(CartDetailTemp)
    }
    return (
        <div className="boton-agregar">
            <button onClick={handleAdd}>{text}</button>
        </div>
    )
}

export {AddItemButton}