import { useState } from "react";
import { regNewUser } from "../api/index";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: name,
      email: email,
      password: password,
    };

    regNewUser(contact);
    setName("");
    setEmail("");
    setPassword("");
  };

  // Albert
  // geo@gmail.com
  // qwerty101

  return (
    <>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="form-name-id">User name:</label>
        <br />
        <input
          id="form-name-id"
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        ></input>
        <br />
        <br />
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
        <button type="submit">sign up</button>
      </form>
      <p>
        if you already have account, please
        <a href="http://localhost:3000/contacts"> log in</a>
      </p>
    </>
  );
};

export default RegisterPage;
