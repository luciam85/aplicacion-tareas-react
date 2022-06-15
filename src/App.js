import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//importamos los comp creados
import Information from "./componentes/information";
import Progress from "./componentes/progress";
import Event from "./componentes/event";
import Home from "./componentes/home";
import List from "./componentes/list";
import NavBarExample from "./layouts/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="information" element={<Information />} />
            <Route path="progress" element={<Progress />} />
            <Route path="list" element={<List />} />
            <Route path="event" element={<Event />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
