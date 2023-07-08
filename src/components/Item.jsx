import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'


function Item({ id, title, price, pictureUrl }) {
    return (
        <div className="item">
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Img variant='top' src={pictureUrl} />
                <Card.Body >
                    <NavLink to={`/item/${id}`}><Button variant="primary">Ver detalle del producto</Button></NavLink>
                </Card.Body>
                <Card.Footer>
                    <Card.Subtitle>Precio: {price}</Card.Subtitle>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Item