import { useEffect, useState } from "react";

export function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, []);


    return (
        <div>Время {time.toLocaleTimeString()}</div>
    );
}

export default Timer;