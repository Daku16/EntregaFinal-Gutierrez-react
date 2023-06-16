import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import { Card } from "react-bootstrap"

const ItemDetail = () => {
    const params = useParams()
    const [itemDetail, setItemDetail] = useState([])
    const url = `https://api.escuelajs.co/api/v1/products/${params.id}`
    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
        }).then((product) => {
            setItemDetail(product)
        })
    },[])
    if(Object.keys(itemDetail).length === 0){
        return null
    }
    return (
        <div className="itemDetail">
            <Card>
                <Card.Header>{itemDetail.category.name}</Card.Header>
                <Card.Img variant='top' src={itemDetail.images[0]} />
                <Card.Body >
                    <Card.Title>{itemDetail.title}</Card.Title>
                    <Card.Text>{itemDetail.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Subtitle>Precio: ${itemDetail.price}</Card.Subtitle>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ItemDetail