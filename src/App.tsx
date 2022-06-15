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
import NotLoggedGatekeeper from "./components/NotLoggedGatekeeper/NotLoggedGatekeeper";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditSummonerPage from "./pages/EditSummonerPage/EditSummonerPage";

function App(): JSX.Element {
  debugger;
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
        <Route
          path="/login"
          element={
            <NotLoggedGatekeeper>
              <LoginPage />
            </NotLoggedGatekeeper>
          }
        />
        <Route
          path="/register"
          element={
            <NotLoggedGatekeeper>
              <RegisterPage />
            </NotLoggedGatekeeper>
          }
        />
        <Route
          path="/new-summoner"
          element={
            <LoggedGatekeeper>
              <CreateSummonerPage />
            </LoggedGatekeeper>
          }
        />
        <Route
          path="/summoners/edit/:id"
          element={
            <LoggedGatekeeper>
              <EditSummonerPage />
            </LoggedGatekeeper>
          }
        />
        <Route
          path="/user/my-summoners"
          element={
            <LoggedGatekeeper>
              <SummonersPage />
            </LoggedGatekeeper>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
