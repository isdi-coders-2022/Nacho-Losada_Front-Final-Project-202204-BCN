import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingModal from "./components/LoadingModal/LoadingModal";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import SummonersPage from "./pages/SummonersPage/SummonersPage";
import CreateSummonerPage from "./pages/CreateSummonerPage/CreateSummonerPage";
import LoggedGatekeeper from "./components/LoggedGatekeeper/LoggedGatekeeper";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import { UserResponseApi } from "./types/interfaces";

function App(): JSX.Element {
  const isLoading: boolean = useAppSelector((state) => state.ui.loading);

  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      const { username, name }: UserResponseApi = jwtDecode(token);

      dispatch(loginActionCreator({ name, username }));
    }
  }, [dispatch, token]);

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
        <Route
          path="/new-summoner"
          element={
            <LoggedGatekeeper>
              <CreateSummonerPage />
            </LoggedGatekeeper>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
