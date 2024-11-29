import React,{useState} from "react";
import StatusDropdown from './StatusDropdown';
function TodoCard({todo,updateTodoStatus,deleteTodo,updateTodo})
{
    const[isEditing,setisEditing]= useState(false);
    const [name,setName] =useState(todo,name);
    const [description,setDescription]=useState(todo,description);
    const handleSave =() =>{
        updateTodo(todo.id,name,description);
        setisEditing(false);
    };
    return(
        <div className="todo-card">
            {isEditing ? (
                <>
                <input type="text"
                value={description }onChange={(e)=>setDescription(e.target.value)}
                />
                <button  onClick={handleSave}>save</button>
                </>
            ) : (
                <>
                <h3>{todo.name}</h3>
                <p>{todo.description}</p>
                </>
            )}
            <div>
                <StatusDropdown status ={todo.status}
                updateTodoStatus ={updateTodoStatus}todoId ={todo.id}/>
                <button onClick={()=> setisEditing(!isEditing)}>Edit</button>
                <buttun onClick={()=>deleteTodo(todo.id)}>Delete</buttun>
            </div>
        </div>
    );
 
}
export default TodoCard;