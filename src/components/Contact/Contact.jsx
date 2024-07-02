import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  console.log(name);
  return (
    <>
      <div>
        <p>
          <IoMdPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </>
  );
};
export default Contact;
