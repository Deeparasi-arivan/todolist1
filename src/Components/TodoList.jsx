import React from "react";
import TodoCard from "./TodoCard";
function TodoList({todos,updateTodoStatus,deleteTodo,updateTodo}){
    return(
        <div className="todo-list">
            {todos.map((todo)=>(
                <TodoCard key={todo.id}todo={todo}updateTodoStatus={updateTodoStatus}deleteTodo={deleteTodo}updateTodo={updateTodo}/>

            ))}
            
        </div>
    );
};
export default TodoList;
