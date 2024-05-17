import React, { useEffect, useState } from "react";
import './App.css';
import NavBar from "./Component/NavBar";
import TodoListDisplay from "./Component/TodoListDisplay";
import TodoList from "./Component/TodoList";

const App = () => {
  const [todoListItems, setTodoListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8000/data')
      .then(res => {
        if (!res.ok) {
          throw new Error('could not fetch, error occurred');
        }
        return res.json();
      })
      .then(data => {
        setTodoListItems(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      {isLoading ? <p>Loading...</p> : (
        <TodoListDisplay
          setTodoListItems={setTodoListItems}
          todoListItems={todoListItems}
        />
        )}
        <TodoList setIsLoading={setIsLoading} setTodoListItems={setTodoListItems} todoListItems={todoListItems} isLoading={isLoading}/>
    </div>
  );
};

export default App;
