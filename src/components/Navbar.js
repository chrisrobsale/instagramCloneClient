import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper white">
            <Link to="/" className="brand-logo left">InstagramClone</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/signin">Sign in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/create">Create Post</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar