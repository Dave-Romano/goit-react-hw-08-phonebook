import ContactList from "./ContactList/ContactList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import Navigation from "./Navigation/Navigation";
import { lazy, Suspense } from "react";

import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import ProfilePage from "../pages/profilePage";

const App = () => {
  return (
    <>
      <LoginPage />
      <Navigation />
      {/* <Routes>
        <Route path="/" element={<Form />}></Route>
      </Routes> */}
      {/* <Form />
      <Filter />
      <ContactList /> */}
    </>
  );
};

export default App;
