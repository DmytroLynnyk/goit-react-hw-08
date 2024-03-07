import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { DeleteModal } from "../DeleteModal/DeleteModal";

export const Contact = ({ contact: { id, name, number } }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <IoMdPerson className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <DeleteModal id={id} />
    </div>
  );
};
