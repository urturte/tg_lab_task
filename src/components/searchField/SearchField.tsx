import React from "react";
import styles from "./searchField.module.css";
import { SearchFieldProps } from "../../interfaces/SearchFieldProps";

const SearchField: React.FC<SearchFieldProps> = ({ type, placeholder, title, onInput }) => {
  return (
    <div className={styles.main}>
        <input 
        type={type}  
        placeholder={placeholder}
        title={title}
        className={styles.search}
        onChange={onInput} 
      />
    </div>
  );
};

export default SearchField;