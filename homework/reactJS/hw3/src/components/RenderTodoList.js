import { Card, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RenderTodoList({todoList, deleteTask}) {
    return (
        <ul className="list">
            {
                todoList?.map(listItem =>  
                <li className="item" key={listItem.id} id={listItem.id}>
                    <Card style={{ padding: '10px', display: 'flex', alignItems: "center"}} variant="outlined">
                        <span style={{ flex: 1 }}>{listItem.task}</span>
                        <IconButton
                            aria-label="delete"
                            onClick={deleteTask}>
                            <DeleteIcon />
                        </IconButton>
                    </Card>
                </li>)
                }   
        </ul>
    )
}