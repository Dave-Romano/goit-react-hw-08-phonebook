import ContactList from "./ContactList/ContactList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import Navigation from "./Navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";

import React from "react";

// user methods
import { usersSelectors, usersOperations } from "../redux/users";

import { lazy, Suspense, useEffect, useState } from "react";
import { PrivateRoute } from "../routes/PrivateRoutes";

import { Routes, Route, Link } from "react-router-dom";

import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import ProfilePage from "../pages/profilePage";
import NotFpundPage from "../pages/notFoundPage";

import { PrivateRoutes } from "../routes/PrivateRoutes";

const App = () => {
  const [token, setToken] = useState("");

  const isLoggedIn = useSelector(usersSelectors.getUserLogeedIn);
  console.log("LOGIN: ", isLoggedIn);
  const verification = isLoggedIn ? "/contacts" : "/";
  const dispatch = useDispatch();

  // Перевірка валідного токена
  useEffect(() => {
    dispatch(usersOperations.getUserInfo());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path={"/contacts"}
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFpundPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
