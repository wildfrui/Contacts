import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";
import Login from "./Login";
import "./App.css";

const App = () => {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Login setToken={setToken}></Login>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
