import React from "react";
import "../App.css";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default Home;
