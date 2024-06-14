import { Link } from "react-router-dom";

export default function Offers() {
    return (
        <nav className="offers center">
            <Link to="/catalog" className="offers__offer women">
                <p className="offers__text">30% OFF</p>
                <h4 className="offers__title">FOR WOMEN</h4>
            </Link>
            <Link to="/catalog" className="offers__offer men">
                <p className="offers__text">HOT DEAL</p>
                <h4 className="offers__title">FOR MEN</h4>
            </Link>
            <Link to="/catalog" className="offers__offer kids">
                <p className="offers__text">NEW ARRIVALS</p>
                <h4 className="offers__title">FOR KIDS</h4>
            </Link>
            <Link to="/catalog" className="offers__offer accesories">
                <p className="offers__text">LUXURIOUS & TRENDY</p>
                <h4 className="offers__title">ACCESSORIES</h4>
            </Link>
        </nav>
    )
}