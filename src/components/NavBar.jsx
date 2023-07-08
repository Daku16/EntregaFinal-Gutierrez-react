import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import "../App.css"
import { useEffect, useState } from "react";

const NavBar = () => {
    const [category, setCategory] = useState([])
    const db = getFirestore()
    const categoriesColletion = collection(db, "categories")
    useEffect(() => {
        getDocs(categoriesColletion).then((snapshots) => {
            setCategory(snapshots.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <NavLink className="navbar-brand" to="/">Nombre de la tienda</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {category.map(category => (
                        <li key={category.id} className="nav-item"><NavLink className="nav-link" to={`/category/${category.id}`}>{category.title}</NavLink></li>
                    ))}
                </ul>
            </div>
            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar