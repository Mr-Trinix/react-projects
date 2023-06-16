import { Outlet } from "react-router-dom";
import Navbar from "./Navbar_new";
import Footer from "./Footer";

function Document() {
    return (
        <div className="container">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Document