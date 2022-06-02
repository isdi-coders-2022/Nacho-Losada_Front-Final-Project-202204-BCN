import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
