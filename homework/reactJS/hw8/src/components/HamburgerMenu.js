import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
    return (
        <div className="menu__link hamburger">
            <input type="checkbox" id="hamburger-link" />
            <label for="hamburger-link">
                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
                        fill="#E8E8E8" />
                </svg>
            </label>
            <div className="hamburger__pop-up">
                <Link to="/registration" className="hamburger__link hamburger__link_hiddenLink">Registration</Link>
                <Link to="/cart" className="hamburger__link hamburger__link_hiddenLink">Cart</Link>
                <h3 className="hamburger__title">MENU</h3>
                <Link to="/catalog" className="hamburger__subtitle">MAN</Link>
                <ul className="hamburger__nav">
                    <li><Link to="/catalog" className="hamburger__link">Accessories</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Bags</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Denim</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">T-Shirts</Link></li>
                </ul>
                <Link to="/catalog" className="hamburger__subtitle">WOMAN</Link>
                <ul className="hamburger__nav">
                    <li><Link to="/catalog" className="hamburger__link">Accessories</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Jackets & Coats</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Polos</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">T-Shirts</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Shirts</Link></li>
                </ul>
                <Link to="/catalog" className="hamburger__subtitle">KIDS</Link>
                <ul className="hamburger__nav">
                    <li><Link to="/catalog" className="hamburger__link">Accessories</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Jackets & Coats</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Polos</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">T-Shirts</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Shirts</Link></li>
                    <li><Link to="/catalog" className="hamburger__link">Bags</Link></li>
                </ul>
            </div>
        </div>
    )
}