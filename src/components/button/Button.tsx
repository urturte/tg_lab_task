import React from "react";
import styles from "./button.module.css";
import { ButtonProps } from "../../interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ loadMore }) => {

  return (
        <button className={styles.button} onClick={loadMore}>Load More</button>
    )
};

export default Button;