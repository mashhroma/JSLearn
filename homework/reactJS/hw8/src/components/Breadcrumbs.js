import { Link } from "react-router-dom";

export default function Breadcrumbs() {
    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__li"><Link className="breadcrumbs__link" to="/">HOME</Link></li>
                <li className="breadcrumbs__li"><Link className="breadcrumbs__link" to="/catalog">MEN</Link></li>
                <li className="breadcrumbs__li"><Link className="breadcrumbs__link" to="#">NEW ARRIVALS</Link></li>
            </ul>
        </nav>
    )
}