import { useState } from "react";
import CreateTask from "./CreateTask";
import RenderTodoList from "./RenderTodoList";

export default function TodoList() {
    const [countId, setCountId] = useState(0);
    const [todoList, setTodoList] = useState([]);
    
    const addTask = () => {
        const task = document.querySelector('#newTask').value;
        if (task !== '') {
            const listItem = {
            id: countId,
            task
        };
        setTodoList([...todoList, listItem]);
        setCountId(countId+1);
        }
    }

    const deleteTask = (e) => {
        const id = parseInt(e.target.closest('.item').id);
        setTodoList(todoList.filter(listItem => listItem.id !== id ));
    }

    return (
        <div>
            <h2>Задание 2: Список дел с Material UI</h2>
            <CreateTask addTask={addTask} />  
            <RenderTodoList todoList={todoList} deleteTask={deleteTask} />
        </div>
    )
}