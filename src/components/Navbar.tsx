import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/todo">Todo</Link></span>
            <span><Link to="/profil/@Alexis">@Alexis</Link></span>
            <span><Link to="/profil/@Miriane">@Miriane</Link></span>
            <span><Link to="/profil/@Mike">@Mike</Link></span>
            <span><Link to="/profil/@Mégane">@Mégane</Link></span>
            <span><Link to="/profil/@Jordan">@Jordan</Link></span>
            <span><Link to="/profil/@Gael">@Gael</Link></span>
            <span><Link to="/profil/@Laurine">@Laurine</Link></span>
            <span><Link to="/profil/@Sylvain">@Sylvain</Link></span>
            <span><Link to="/profil/@Hamza">@Hamza</Link></span>
            <span><Link to="/profil/@Emmanuel">@Emmanuel</Link></span>
        </div>
    )
}

export default Navbar