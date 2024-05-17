import React from "react";

const TodoListDisplay = ({ setTodoListItems, todoListItems }) => {

  const handleDelete = (id) => {
    setTodoListItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleComplete = (id) => {
    setTodoListItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEdit = (id, newTitle) => {
    setTodoListItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  return (
    <div className="todo-list">
      {todoListItems.map(item => {
        const date = new Date(item.createdAt);
        const formattedDate = date.toLocaleString(); 

        return (
          <div className="card" key={item.id}>
            <h3 style={{ textDecoration: item.completed ? 'line-through' : 'none', color: item.completed ? 'red' : 'black' }}>
              {item.title}
            </h3>
            <p>{item.description}</p>
            <b>{formattedDate}</b>
            <br /><br />
            <div>
              <input
                className="checkbox"
                type="checkbox"
                checked={item.completed || false}
                onChange={() => handleComplete(item.id)}
              />
              Completed
            </div>
            <div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item.id, prompt("New title:", item.title))}>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoListDisplay;
