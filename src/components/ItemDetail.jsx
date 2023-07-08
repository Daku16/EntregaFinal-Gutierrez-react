import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { ItemCount } from "./ItemCount"
import { getFirestore, getDoc, doc } from "firebase/firestore"
import {CartContext } from "../context/CartContext"
import { useContext } from "react"

const ItemDetail = () => {
    const params = useParams()
    const [itemDetail, setItemDetail] = useState([])
    const { setCartDetailTemp } = useContext(CartContext)
    useEffect(() => {
        const db = getFirestore()
        const itemDetail = doc(db, "items", params.id)
        getDoc(itemDetail).then((snapshots) => {
            setItemDetail(snapshots.data())
            setCartDetailTemp(snapshots.data())
        })
    }, [])
    return (
        <div className="itemDetail">
            <div className="itemDetailDescription">
                <div>

                    <h2>{itemDetail.title}</h2>
                    <img src={itemDetail.picture} alt="" />
                </div>
                <div className="itemDetailDescription-text">

                    <p>{itemDetail.description}</p>
                    <p>Precio: ${itemDetail.price}</p>
                </div>
            </div>
            <ItemCount initial={1} stock={itemDetail.stock} />
        </div>
    )
}

export default ItemDetail