import css from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        // console.log(contact),
        <li key={contact._id} className={css.contactsItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
