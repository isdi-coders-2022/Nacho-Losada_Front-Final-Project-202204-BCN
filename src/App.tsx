import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingModal from "./components/LoadingModal/LoadingModal";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "./redux/hooks/hooks";
import SummonersPage from "./pages/SummonersPage/SummonersPage";
import CreateSummonerPage from "./pages/CreateSummonerPage/CreateSummonerPage";

function App(): JSX.Element {
  const isLoading: boolean = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {isLoading && <LoadingModal />}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/summoners" element={<SummonersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/new-summoner" element={<CreateSummonerPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
