import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom'
import "../App.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <NavLink className="navbar-brand" to="/">Nombre de la tienda</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/category/${1}`}>Clothes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/category/${2}`}>Electronics</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/category/${3}`}>Furniture</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/category/${4}`}>Shoes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/category/${5}`}>Others</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar