import { useEffect, useState } from "react";
import { ContactListStyled } from "./ContactListStyled";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";
import Modal from "../Common/Modal";

const ContactList = () => {
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [tmpId, setTmpId] = useState(null);

  const dispatch = useDispatch();

  const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);
  // console.log("HERE IS MY CONTACTS:", visibleContacts);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, []);

  const handleContactDelete = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const handleUpdateContact = (e) => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };
    const id = tmpId;

    //

    console.log("requestID:", id, "requestUpdatedContact:", contact);
    dispatch(contactsOperations.updateContact({ id, contact }));
    setName("");
    setNumber("");
    setTmpId(null);
  };

  return (
    <ContactListStyled className="Contact">
      <label>Contact list:</label>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Edit contact</h2>
        <form onSubmit={handleUpdateContact}>
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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <br />
          <button type="submit">update contact</button>
        </form>
      </Modal>
      {visibleContacts.length > 0 && (
        <ul className="Contact__list">
          {visibleContacts.map((contact) => (
            <li key={contact.id} className="Contact__item">
              <p className="Contact__text">
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                className="Contact__button"
                onClick={() => {
                  setTmpId(contact.id);
                  return setModalActive(true);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="Contact__button"
                onClick={() => handleContactDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </ContactListStyled>
  );
};

export default ContactList;
