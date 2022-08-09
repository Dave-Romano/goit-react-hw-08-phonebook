import ContactList from "./ContactList/ContactList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";
import { usersSelectors } from "../redux/users";
import { lazy, Suspense } from "react";

import { Routes, Route, Link } from "react-router-dom";

import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import ProfilePage from "../pages/profilePage";
import NotFpundPage from "../pages/notFoundPage";

const App = () => {
  const isLoggedIn = useSelector(usersSelectors.getUserLogeedIn);
  console.log("LOGIN: ", isLoggedIn);

  return (
    <>
      <Navigation />
      {/* {isLoggedIn ? <ProfilePage /> : <LoginPage />} */}
      {/* <LoginPage /> */}

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/contacts" element={<ProfilePage />}></Route>
        <Route path="*" element={<NotFpundPage />}></Route>
      </Routes>
      {/* <Form />
      <Filter />
      <ContactList /> */}
    </>
  );
};

export default App;
