import {Button, Card, CardActions, CardContent, Typography} from "@mui/material"
const TodoList = ({todo,fetchCurentTodoDetails})=>
{
    return <Card sx={{
        maxWidth:350,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:"12px",
    }}>
        <CardContent>
            <Typography variant="h5" color={"text.secondary"}>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>fetchCurentTodoDetails(todo?.id)} sx={{
                backgroundColor:'#000000',
                color:'#fff',
                opacity:'0.75',
                '&:hover':{
                    opacity:'1'
                }
            }}>Details</Button>
        </CardActions>
    </Card>
}
export default TodoList;