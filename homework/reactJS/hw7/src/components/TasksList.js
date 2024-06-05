import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../reducer/tasksSlice";

const TasksList = () => {
    const dispatch = useDispatch();
    const { tasks, loadStatus } = useSelector((state) => state.tasks);

    useEffect(() => {
        if (loadStatus === "") {
            dispatch(getTasks());
        }
    }, [loadStatus, dispatch]);

    return (
        <div>
            <h1>Текущий список задач</h1>

            {loadStatus === "loading" && <div>Данные загружаются...</div>}
            {loadStatus === "failed" && <div>Ошибка загрузки данных</div>}

            {loadStatus === "success" && (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <p>{task.title}</p>
                            <i style={{ color: task.completed ? '#17c817' : 'red' }}>статус: {task.completed ? "Готово" : "Выполняется"}</i>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TasksList;