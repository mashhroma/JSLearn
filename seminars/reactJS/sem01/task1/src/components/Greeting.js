const hour = new Date().getHours()
const greeting = (hour < 12) ? 'Доброе утро' : 'Добрый день'

function Greeting() {
    return (
        <h1>
            {greeting}
        </h1>
    );
}

export default Greeting;