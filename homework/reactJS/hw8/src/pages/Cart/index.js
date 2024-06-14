import OrderForm from "./OrderForm"
import OrderTotalSum from "./OrderTotalSum"
import OrderedList from "./OrderedList"

export default function Cart() {
    return (
        <>
            <section className="heading center">
                <h1 className="heading__title">SHOPPING CART </h1>
            </section>
            <main className="cart center">
                <OrderedList />
                <section className="order">
                    <OrderForm />
                    <OrderTotalSum />
                </section>
            </main>
        </>
    )
}