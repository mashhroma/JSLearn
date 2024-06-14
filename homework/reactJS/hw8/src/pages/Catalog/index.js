import ProductList from "../../components/ProductList";
import Pagination from "./Pagination";
import Features from "../../components/Features";
import Breadcrumbs from "../../components/Breadcrumbs";
import FilterNavigation from "./FilterNavigation";

export default function Catalog(products) {
    return (
        <>
            <section className="heading center">
                <h1 className="heading__title">NEW ARRIVALS </h1>
                <Breadcrumbs />
            </section>
            <main className="catalog center">
                <FilterNavigation />
                <ProductList />
                <Pagination />
            </main>
            <Features />
        </>
    )
}