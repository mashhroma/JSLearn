import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import ProductPreview from "./ProductPreview";
import { getProducts } from "../reducer/productSlice";
import { FilterContext } from "../contexts/FilterContext";
import sizeFilter from "../hoc/sizeFilter";

export default function ProductList() {
    const dispatch = useDispatch();
    const { products, loadStatus } = useSelector((state) => state.products);
    const { filter } = useContext(FilterContext);

    const filteredProducts = sizeFilter(products, filter);

    useEffect(() => {
        if (loadStatus === "") {
            dispatch(getProducts());
        }
    }, [loadStatus, dispatch]);

    return (
        <section className="products">
            {loadStatus === "loading" && <div>Данные загружаются...</div>}
            {loadStatus === "failed" && <div>Ошибка загрузки данных</div>}
            {loadStatus === "success" &&
                filteredProducts.map(product => <ProductPreview product={product} />)}
        </section>
    )
}
