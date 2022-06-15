import "../App.css";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/fort-awesome/css/fort-awesome.min.css"; (ver, tira error)

function Home() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default Home;
