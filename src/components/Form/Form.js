import { useState } from "react";
import { FormStyled } from "./FormStyled";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const stateReset = () => {
    setName("");
    setPhone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name,
      phone,
    };

    dispatch(contactsOperations.postContacts(contact));
    stateReset();
  };

  return (
    <FormStyled>
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <div className="Phonebook__container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="form-name-id">Name:</label>
            <br />
            <input
              id="form-name-id"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
            <br />

            <label htmlFor="form-number-id">Number:</label>
            <br />
            <input
              id="form-number-id"
              type="tel"
              name="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
            <br />
            <button type="submit">add contact</button>
          </form>
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;
