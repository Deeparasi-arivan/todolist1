import React,{useState} from "react";
function StatusDropdown ({status,updateTodoStatus,todoId}){
    const [isOpen,setIsOpen] = useState(false);
    const [selectedStatus] =useState(status);
    const toggleDropdown =() =>setIsOpen(!isOpen);
    const handlechange =(newStatus)=>{
        setSelectedStatus(newStatus); 
            updateTodoStatus(todoId , newStatus); 
            setIsOpen(false); 
        };
        return(
            <div className="status-dropdown">
                <button onClick={toggleDropdown}>{selectedStatus === 'Not completed' ? 'Not completed':'completed'}</button>
                {isOpen &&(
                    <div className="dropdown-menu">
                        <button onClick={()=> handlechange('completed')}>Comleted</button>
                        </div>
                )}
            </div>
        );
    
}
export default StatusDropdown;
