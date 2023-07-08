import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { AddItemButton } from "./AddItemButton"


const ItemCount = ({ stock, initial }) => {
    const [cantStock, setCantStock] = useState(initial)
    const handleAdd = () => {
        if (cantStock < stock) {
            setCantStock(cantStock + 1)
        }
    }
    const handleMinus = () => {
        if (cantStock > 1) {
            setCantStock(cantStock - 1)
        }
    }
    return (
        <div>
            <div className="contador">
                <button onClick={handleAdd}><AiOutlinePlus /></button>
                <p>{cantStock}</p>
                <button onClick={handleMinus}><AiOutlineMinus /></button>
            </div>
            <AddItemButton text={"Agregar al carrito"} quantity={cantStock}/>
        </div>
    )
}

export { ItemCount }