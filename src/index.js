import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// 1. homePage: login page + (registration)
// 2. Якщо є валідний токен, повинно відразу перекидувати на сторінку юзера
// 3. При успішному логіні, перекидує на сторінку користувача
// 4. При успішній регістрації перекидує на сторінку логіну
// 5. На сторіні користувача відмальовується роут додаткової інфи + кнопка вийти з alert підтвердження виходу
// 6.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
