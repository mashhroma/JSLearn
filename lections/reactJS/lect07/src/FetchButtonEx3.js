import React from "react";
import { useDispatch } from "react-redux";

function FetchButtonEx3() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });
    };

    return <button onClick={handleClick}>Fetch Data</button>
}

export default FetchButtonEx3;
