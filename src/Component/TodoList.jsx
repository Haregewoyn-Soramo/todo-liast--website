import React, { useState } from "react";

const TodoList = ({ displaylist, todoListItems, setTodoListItems, isLoading, setIsLoading }) => {
  const [userInput, setUserInput] = useState('');

  const newItem = (e) => {
    setUserInput(e.target.value); 
  };

  const handleInput = () => {
    if (userInput.trim()) { 
      setIsLoading(true);
      fetch('http://localhost:8000/data', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: userInput })
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add item');
        }
        return response.json();
      }).then(() => {
        setIsLoading(false);
        setTodoListItems(prev => [...prev, { title: userInput }]); 
        setUserInput(''); 
      }).catch((error) => {
        console.error("Error adding item:", error);
        setIsLoading(false);
      });
    }
  };

  return (
    <div className="todoList">
      <h2>Create Todo List</h2>
      <div>
        <input
          className="listInput"
          type="text"
          placeholder="add task"
          value={userInput} 
          onChange={newItem}
        />
        <button className="btn" onClick={handleInput}>Add</button> 
      </div>
      
      <div className="list">
        {displaylist}
      </div>
    
    </div>
  );
};

export default TodoList;
