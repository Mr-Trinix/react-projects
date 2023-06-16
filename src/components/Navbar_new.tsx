import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <span><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/todo">Todo</NavLink></span>
            <span><NavLink to="/freelance">Freelance</NavLink></span>
            <span><NavLink to="/profil/@Emmanuel">Mon profil</NavLink></span>
        </div>
    )
}

export default Navbar