// Создать компонент TextInput, который содержит текстовое поле ввода и отображает введённый текст под ним в реальном времени.

import { useState } from "react";

function TextInput() {
    const [text, setText] = useState('');

    const addText = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h3>{text}</h3>
            <input type="text" onChange={addText} />
        </div>
    )
}

export default TextInput;