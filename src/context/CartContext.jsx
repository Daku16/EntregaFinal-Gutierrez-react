import { createContext, useState } from "react";

const CartContext = createContext([])

const CartProvider = ({ children }) => {

    const [cartQuantity, setCartQuantity] = useState(0)
    const [ CartDetailTemp, setCartDetailTemp] = useState(0)
    const [CartDetail, setCartDetail] = useState(0)
    return (
        <CartContext.Provider value={{cartQuantity, setCartQuantity, CartDetailTemp, setCartDetailTemp, CartDetail, setCartDetail}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}