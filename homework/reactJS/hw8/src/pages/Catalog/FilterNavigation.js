import ProductSort from "../../components/ProductSort";
import ProductFilter from "./ProductFilter";


export default function FilterNavigation() {
    return (
        <nav className="filter-box">
            <div className="filter-box__left">
                <ProductFilter />
            </div>
            <div className="filter-box__right">
                <ProductSort />
            </div>
        </nav>
    )
}