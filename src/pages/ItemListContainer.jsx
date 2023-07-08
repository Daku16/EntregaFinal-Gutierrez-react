import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({}) => {
    const params = useParams()
    return(
        <div>
            <h2>{params.id}</h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer