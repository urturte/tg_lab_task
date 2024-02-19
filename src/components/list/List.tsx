import React from "react";
import styles from "./list.module.css";
import ArticleBox from "../articleBox/ArticleBox";
import { ListProps } from "../../interfaces/ListProps";
import { Article } from "../../interfaces/Article";

const List: React.FC<ListProps> = ({ articles }) => {
  
  return (
    <div>
        <div className={styles.list}>
            {articles && articles.map((article: Article) => {
                return (
                    <ArticleBox article={article}/>
                );
            })}
        </div>
    </div>
  );
};

export default List;