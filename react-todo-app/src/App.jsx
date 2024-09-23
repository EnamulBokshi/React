import { useEffect, useState } from "react"
import classess from './styles.module.css'
import TodoList from "./components/todo-item"
import TodoDetails from "./components/todo-details"
import { Dialog, DialogTitle, Skeleton } from "@mui/material"
function App() {
  const [todoList,setTodo] = useState([])
  const [loading,setLoading] = useState(false)
  const [erroMessage,setErrorMessage] = useState(null)
  const [todoDetails,setTodoDetails] = useState(null);
  const [opeDialogModel,setDialogModel] = useState(false);
  async function fetchTodos() {
    try { 
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos')  
      const result = await apiResponse.json()
      if(result?.todos && result?.todos?.length>0){
        setTodo(result?.todos)
        setLoading(false)
      }else{
        setLoading(false)
        setErrorMessage('')
      }
    } catch (error) {
      setLoading(false)
      setErrorMessage("Someting went wrong")
    }
}  
async function fetchCurentTodoDetails(currentTodoId) {
    try{
      setLoading(true)
      const apiResponse = await fetch(`https://dummyjson.com/todos/${currentTodoId}`)
      const details = await apiResponse.json();
      if(details){
        setTodoDetails(details);
        setDialogModel(true);
        setLoading(false)
      }else{
        setTodoDetails(null)
        setDialogModel(false)
        setLoading(false)

      }
      
    }catch(error){
      setLoading(false);
      setErrorMessage('Someting went wrong!!')
    }
}
  useEffect(()=>{
    fetchTodos()
  },[])

if(loading){
  return <Skeleton variant="rectangular" width={650} height={650}></Skeleton>
}

  return (
    <>
     <div className={classess.Wrapper}>
      <h1 className={classess.headerTitle}>My Todo App</h1>
        <div className={classess.todoWrapper}>
            {
              todoList && todoList.length > 0 ?
              todoList.map((todoItem) => <TodoList fetchCurentTodoDetails = {fetchCurentTodoDetails} todo = {todoItem}/>): null
            }
        </div>
     </div>
     <TodoDetails setTodoDetails = {setTodoDetails} todoDetails = {todoDetails} openDialog = {opeDialogModel} setOpenDialog = {setDialogModel}/>
    </>
  )
}
export default App
