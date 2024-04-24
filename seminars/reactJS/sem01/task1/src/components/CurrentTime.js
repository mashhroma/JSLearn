import './CurrentTime.css'

const now = new Date().toLocaleTimeString();

function CurrentTime(params) {
    return (
        <h2>
            Текущее время: {now}
        </h2>
    )
}

export default CurrentTime