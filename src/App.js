import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//importamos los comp creados
import Information from "./componentes/information";
import Home from "./componentes/home";
import List from "./componentes/list";
import NavBarExample from "./layouts/navbar";
import LoginButton from "./componentes/LoginButton";
import LogoutButton from "./componentes/LogoutButton";
import Profile from "./componentes/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  /*
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>;
  }

   {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
  */
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="information" element={<Information />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
