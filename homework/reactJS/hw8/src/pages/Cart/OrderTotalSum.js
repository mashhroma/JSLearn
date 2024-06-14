import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export default function OrderTotalSum() {
    const { getSumInCart } = useContext(CartContext);

    return (
        <div className="total">
            <div className="total__item">
                <span>SUB TOTAL</span>
                <span className="total__item_sum">${getSumInCart()}</span>
            </div>
            <div className="total__all">
                <span>GRAND TOTAL</span>
                <span className="total__all_sum">${getSumInCart()}</span>
            </div>
            <button className="total__button" type="reset">
                PROCEED TO CHECKOUT
            </button>
        </div>
    )
}