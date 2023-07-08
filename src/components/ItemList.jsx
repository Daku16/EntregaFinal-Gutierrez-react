import Item from "./Item"
import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const ItemList = () => {
    const [items, setItems] = useState([])
    const db = getFirestore()
    const params = useParams()
    const itemsColletion = collection(db, "items")
    useEffect(() => {
        getDocs(itemsColletion).then((snapshots) => {
            if (params.id !== undefined) {
                setItems(snapshots.docs.filter((item) => item.category === params.id).map(item => {
                    return {
                        id: item.id,
                        ...item.data()
                    }
                }))
            }
            else {
                setItems(snapshots.docs.map(item => {
                    return {
                        id: item.id,
                        ...item.data()
                    }
                }))
            }
        })
    }, [items])
    return (
        <div>
            <h2>Listado de productos</h2>
            <Container className="listitem">
                {items.map(item => (
                    <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.picture} />
                ))}
            </Container>
        </div>
    );
};

export default ItemList