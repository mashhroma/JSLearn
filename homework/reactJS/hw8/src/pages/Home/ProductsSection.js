import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList";

export default function ProductsSection() {
    return (
        <section className="content center">
            <h3 className="content__title">Featured Items</h3>
            <p className="content__text">Shop for items based on what we featured in this week</p>
            <ProductList />
            <Link to="/catalog" className="button">Browse All Product</Link>
        </section>
    )
}
