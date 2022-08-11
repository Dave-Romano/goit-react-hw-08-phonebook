import { useState } from "react";
import { loginUser } from "../api/index";
import { useDispatch } from "react-redux";
import { usersOperations } from "../redux/users";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      email,
      password,
    };
    dispatch(usersOperations.loginUser(contact));
    // loginUser(contact);
  };

  return (
    <>
      <h1>Welcome! Please, log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="form-email-id">Email:</label>
        <br />
        <input
          id="form-email-id"
          placeholder="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          title="Пожалуйста используйте валидный email"
          required
        ></input>
        <br />
        <label htmlFor="form-password-id">Password:</label>
        <br />
        <input
          id="form-password-id"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <br />
        <button type="submit">log in</button>
      </form>

      <a href="http://localhost:3000/register"> create new account</a>
    </>
  );
};

export default LoginPage;
