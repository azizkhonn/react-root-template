import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='container navWrapper'>
            <div className='NavContainer'>
                <a href="/">
                    <h1>Logo</h1>
                </a>
                <nav className='navbar'>
                    <div className='logo'>
                    </div>
                    <ul className='navItem'>
                        <Link className='navLink' to="/">Home</Link>
                        <Link className='navLink' to="/about">About</Link>
                        <Link className='navLink' to="/contacts">Contacts</Link>
                        <Link className='navLink' to="/skills">Skills</Link>
                        <Link className='navLink' to="/portfolio">Portfolio</Link>
                        <Link className='navLink' to="/blog">Blog</Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
