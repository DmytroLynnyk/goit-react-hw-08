import css from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);

  const visibleContacts = () => {
    if (filteredContacts.length === 0) {
      return allContacts;
    }
    return filteredContacts.map((el) => el.item);
  };

  return (
    <ul className={css.contactsList}>
      {visibleContacts().map((contact) => (
        <li key={contact.id} className={css.contactsItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
