import { Link } from "react-router-dom";

export default function Pagination() {
    return (
        <section className="pages">
            <ul className="pages__list">
                <li className="pages__item">
                    <Link to="#" class="pages__link-prev">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.995 2L2.995 7L7.995 12L6.995 14L-0.00500488 7L6.995 0L7.995 2Z"
                                fill="black" />
                        </svg>
                    </Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">1</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">2</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">3</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">4</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">5</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">6</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">.....</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link">20</Link></li>
                <li className="pages__item"><Link to="#" class="pages__link-next">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
                            fill="black" />
                    </svg>
                </Link></li>
            </ul>
        </section>
    )
}