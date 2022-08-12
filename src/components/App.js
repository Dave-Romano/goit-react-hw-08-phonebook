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

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import ContactsPage from "../pages/contactsPage";
import NotFpundPage from "../pages/notFoundPage";

import { PrivateRoutes } from "../routes/PrivateRoutes";
import { PublicRoute, PublicRoutes } from "../routes/PublicRoutes";

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
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route
          path={"/contacts"}
          element={
            <PrivateRoutes>
              <ContactsPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<NotFpundPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
