import React, { useState, ChangeEvent } from 'react';
import styles from '../styles/Home.module.css'
import SearchField from '../components/searchField/SearchField';
import MainBody from '../components/mainBody/MainBody';
import { useArticles } from '../hooks/useArticles';

const Home: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const { articles, loading, error } = useArticles();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  
  const filteredArticles = articles && articles.filter(article =>
    article.title && article.title.toLowerCase().includes(filter.toLowerCase())
  );
  
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <SearchField 
        type="text" 
        placeholder="Search..." 
        title="Type in a name" 
        onInput={handleInputChange} />
      <MainBody articles={filteredArticles}/>
    </div>
  );
}
export default Home;