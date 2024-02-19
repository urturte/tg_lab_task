import { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '../interfaces/Article';

export function useArticles() {
    const [articles, setArtciles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/');
        setArtciles(response.data.results);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
}, []);

return { articles, loading, error };
}