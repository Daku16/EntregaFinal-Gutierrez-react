import Item from "./Item"
import { useEffect, useState } from "react"
import {Container} from 'react-bootstrap'
import { useParams } from "react-router-dom";
let url = ""

const ItemList = () => {
    const params = useParams()
    if (Object.keys(params).length === 0) {
        url = `https://api.escuelajs.co/api/v1/products`
    } else if (Object.keys(params).length !== 0) {
        url = `https://api.escuelajs.co/api/v1/categories/${params.id}/products`
    }
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchItems = () => {
            setTimeout(() => {
                fetch(url).then((response) => {
                    return response.json()
                }).then((products) => {
                    setItems(products)
                })
                
            }, 2000);
        };
        fetchItems();
    }, [items]);
    return (
        <div>
            <h2>Listado de productos</h2>
            <Container className="listitem">
            {items.map(item => (
                <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.images[0]}/>
            ))}
            </Container>
        </div>
    );
};

export default ItemList