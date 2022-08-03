import { useEffect } from "react";
import { ContactListStyled } from "./ContactListStyled";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);

  const handleContactDelete = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <ContactListStyled className="Contact">
      <label>Contact list:</label>
      {visibleContacts.length > 0 && (
        <ul className="Contact__list">
          {visibleContacts.map((contact) => (
            <li key={contact.id} className="Contact__item">
              <p className="Contact__text">
                {contact.name}: {contact.phone}
              </p>
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
