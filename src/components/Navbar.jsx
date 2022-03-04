import { Link } from "react-router-dom";

function Navbar() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Execise Tracker</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Execises</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
        </div>
    </nav>);
}

export default Navbar;