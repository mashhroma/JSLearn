export default function OrderForm() {
    return (
        <div className="order__registration">
            <h2 className="order__title">SHIPPING ADDRESS</h2>
            <form className="order__form" action="#" method="post">
                <input className="order__input" type="text" name="" id="" placeholder="Bangladesh" />
                <input className="order__input" type="text" name="" id="" placeholder="State" />
                <input className="order__input" type="text" name="" id="" placeholder="Postcode / Zip" />
                <button className="order__button" type="reset">GET A QUOTE</button>
            </form>
        </div>
    )
}
