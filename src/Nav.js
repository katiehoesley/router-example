import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/profiles">
                    <li>Profiles</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav; 