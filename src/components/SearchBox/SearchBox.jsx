import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </>
  );
};
export default SearchBox;
