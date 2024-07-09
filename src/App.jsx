import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/Authentication/LogIn";
import Register from "./components/Authentication/Register";
import Home from "./components/Home";

const App = () => {
  let routes = [
    {
      id:1,
      link: "/logIn",
      element: <LogIn/>
    },
    {
      id:2,
      link: "/register",
      element: <Register/>
    },
    {
      id:3,
      link: "/",
      element: <Home/>
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        {
          routes.map((el) => (
            <Route path={el.link} element={el.element} key={el.id}/>
          ))
        }
      </Routes>
    </>
  );
};

export default App;
