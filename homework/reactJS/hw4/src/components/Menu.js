import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <ul>
            <li><Link to={`/`}>Главная</Link></li>
            <li><Link to={`/about`}>О нас</Link></li>
        </ul>
    )
}