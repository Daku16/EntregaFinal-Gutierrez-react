import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const  Cart = () => {
    const {CartDetail} = useContext(CartContext)
    console.log(CartDetail)
    return (
        <h1>{CartDetail.stock}</h1>
    )
}

export default Cart