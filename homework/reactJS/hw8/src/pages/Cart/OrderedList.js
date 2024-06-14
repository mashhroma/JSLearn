import { Link } from "react-router-dom";
import OrderedItem from "./OrderedItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function OrderedList() {
    const { cartProducts } = useContext(CartContext);

    return (
        <section className="basket">
            <div className="goods">
                {cartProducts.map(product => <OrderedItem product={product} />)}
            </div>
            <div className="basket__buttons">
                <Link className="basket__button" to="#">CLEAR SHOPPING CART</Link>
                <Link className="basket__button" to="#">CONTINUE SHOPPING</Link>
            </div>
        </section>
    )
}