import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactsData.map((contactData) => {
        return (
          <li className={css.contactListItem} key={contactData.id}>
            <Contact
              id={contactData.id}
              name={contactData.name}
              number={contactData.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
