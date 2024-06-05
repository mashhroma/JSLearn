import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const ThemeToggle = ({ children }) => {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div className='content' style={{ color: theme === false ? 'black' : 'white', background: theme === false ? 'white' : 'black' }}>
            <button onClick={toggleTheme}>Переключить тему на {theme === false ? 'темную' : 'светлую'}</button>
            {children}
        </div>

    )
}

export default ThemeToggle;