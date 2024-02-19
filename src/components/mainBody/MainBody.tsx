import React, { useState, useEffect } from "react";
import styles from "./mainBody.module.css";
import List from "../list/List";
import Button from "../button/Button";
import { Article } from "../../interfaces/Article";
import { MainBodyProps } from "../../interfaces/MainBodyProps";

const MainBody: React.FC<MainBodyProps> = ({ articles }) => {
  const itemsPerPage = 8;
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);

  useEffect(() => {
    setDisplayedArticles(articles && articles.slice(0, itemsPerPage));
  }, [articles]);

  const loadMore = () => {
    const currentLength = displayedArticles.length;
    const nextItems = articles && articles.slice(currentLength, currentLength + itemsPerPage);
    setDisplayedArticles(prevArticles => [...prevArticles, ...nextItems]);
  };

  return (
    <div className={styles.main}>
      <List articles={displayedArticles} />
      {articles && displayedArticles.length < articles.length && <Button loadMore={loadMore}/> }
    </div>
  );
};

export default MainBody;
