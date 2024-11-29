import React,{useState} from "react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
function App (){
    const [todos,setTodo]=useState([]);
    const [filter,setFilter]=useState('all');
    const addTodo =(name,description) => {setTodos([...todos,{name,description,status: 'not completed',id:Date.now()}
        ]);
    };
    const updateTodoStatus =(id,status)=>{
        const updatedTodos =todos.map(todo =>todo.id === id ? {...todo,status}: todo);
        setTodos(updatedTodos);
    };
    const deleteTodo = (id) => { setTodos(todos.filter(todo => todo.id !== id ));

    };
    const updateTodo =(id,name ,description)=>{
        const updatedTodos = todos.map(todo =>todo.id === id ? { ...todo,name,description } : todo);
        setTodos(updatedTodos);
    };
    const filteredTodos = todos.filter( todo =>filter ==='all' || todo.status === filter);
    return(
        <div className="box1">
            <h1 >To-Do App</h1>
            
            <AddTodo addTodo={addTodo}/>
            <div className="task1">
                <h4>my todos</h4>
                <hr></hr>
                <h4>Name : office task-1</h4>
                <h4>Description :this is the description for My first task</h4>
                <label for="Status" id="status">status  : </label>
                <select name="">
                    <option value="compeleted">compeletd</option>
                    <option value="not compeleted">not compeletd</option></select><br></br>
                <button onClick={()=>setFilter('completed')}>Edit</button>
                <div className="delete">
                <button onClick={()=>setFilter('not completed')}>Delete</button> <br></br></div>
            </div>
            <TodoList todos={filteredTodos} updateTodoStatus ={updateTodoStatus}deleteTodo ={deleteTodo}updateTodo={updateTodo}/>


            <div className="task2">
                <h4>my todos</h4>
                <hr></hr>
                <h4>Name : office task-1</h4>
                <h4>Description :this is the description for My first task</h4>
                <label for="Status" id="status">status  : </label>
                <select name="">
                    <option value="compeleted">compeletd</option>
                    <option value="not compeleted">not compeletd</option></select><br></br>
                <button onClick={()=>setFilter('completed')}>Edit</button>
                <div className="delete">
                <button onClick={()=>setFilter('not completed')}>Delete</button> <br></br></div>
            </div>
            <TodoList todos={filteredTodos} updateTodoStatus ={updateTodoStatus}deleteTodo ={deleteTodo}updateTodo={updateTodo}/>
           
            <div className="task3">
                <h4>my todos</h4>
                <hr></hr>
                <h4>Name : office task-1</h4>
                <h4>Description :this is the description for My first task</h4>
                <label for="Status" id="status">status  : </label>
                <select name="">
                    <option value="compeleted">compeletd</option>
                    <option value="not compeleted">not compeletd</option></select><br></br>
                <button onClick={()=>setFilter('completed')}>Edit</button>
                <div className="delete">
                <button onClick={()=>setFilter('not completed')}>Delete</button> <br></br></div>
            </div>
            <TodoList todos={filteredTodos} updateTodoStatus ={updateTodoStatus}deleteTodo ={deleteTodo}updateTodo={updateTodo}/>
            
        </div>
    );
};
export default App;
