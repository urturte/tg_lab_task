import React from "react";
import styles from "./articleBox.module.css";
import { ArticleBoxProps } from "../../interfaces/ArticleBoxProps";

const ArticleBox: React.FC<ArticleBoxProps> = ({ article }) => {
    const handleClick = () => {
        window.open(article.url, '_blank');
    };

  return (
        <div className={styles.itemBox} onClick={handleClick}>
            <img src={article.image_url} className={styles.img}/>
            <h5 className={styles.title}>{article.title}</h5>
            <h6 className={styles.description}>{article.news_site}</h6>
        </div>
    )
};

export default ArticleBox;