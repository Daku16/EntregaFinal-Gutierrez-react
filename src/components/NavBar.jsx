import CartWidget from "./CartWidget";
import "../App.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand" href="#">Nombre de la tienda</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Categoría 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 3</a>
                    </li>
                </ul>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar