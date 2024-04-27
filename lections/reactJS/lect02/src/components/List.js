import { useState } from "react";

export function MessageList() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Это первый комментарий", heading: 'heading 1' },
        { id: 2, text: "Это второй комментарий", heading: 'heading 2' },
        { id: 3, text: "Это третий комментарий", heading: 'heading 3' }
    ]);

    return messages.map(message =>
        <>
            <h2>{message.heading}</h2>
            <div key={message.id}>{message.text}</div>
        </>
    );
}

export default MessageList;