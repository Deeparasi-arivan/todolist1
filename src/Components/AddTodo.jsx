import React,{useState} from "react";
function AddTodo({addTodo}){
    const [name,setname]= useState('');
    const [description,setDescription]=useState('');
    const handlesubmit = (e) =>{
        e.preventDefult();
        if (name.trim()){
            addTodo(name,description);
            setname('');
            setDescription('');

        }

    };
    return(
        <form onSubmit={handlesubmit}>
            <input type="text"value={name}onChange={(e)=>setDescription(e.target.value)}
            placeholder="Task Name"/>
            <input type="text"value={name}onChange={(e)=>setDescription(e.target.value)}
            placeholder="Todo description"/>
            <button type="submit">AddTodo</button>
        </form>
          )

    

};
 export default AddTodo;