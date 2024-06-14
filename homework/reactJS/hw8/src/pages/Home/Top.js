export default function Top() {
    return (
        <section className="top center">
            <img src="./img/top_img.png" alt="baner" class="top__left half" />
            <div className="top__right half">
                <div className="line">
                    <svg className="svg__line" width="12" height="93" viewBox="0 0 12 93" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.900879H0V92.9009H12V0.900879Z" fill="#F16D7F" />
                    </svg>
                </div>
                <div className="top__title-box">
                    <h1 className="top__title">THE BRAND</h1>
                    <h2 className="top__title-small"> OF LUXURIOUS <strong class="pink">FASHION</strong></h2>
                </div>
            </div>
        </section>
    )
}