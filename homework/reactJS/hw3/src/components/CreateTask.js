import { Button, TextField } from "@mui/material";

export default function CreateTask({addTask}) {
    return (
        <form action="#">
            <TextField
                style={{ margin: '20px' }}
                id="newTask"
                label="Введите новую задачу"
                variant="outlined"
            />
            <div>
                <Button
                    variant="contained"
                    style={{ margin: '20px' }}
                    onClick={addTask}>
                        Добавить задачу
                </Button>
            </div>
        </form>
    )
}