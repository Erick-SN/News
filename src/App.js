import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
function App() {
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const API_KEY = '99befd395ae94e1c8ab16ba3080e6f3c';
      const URL = `http://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${API_KEY}`;
      const response = await fetch(URL).then((response) => response.json());
      setNews(response.articles);
    };
    getData();
  }, [category]);
  return (
    <>
      <Header title='News' />
      <div className='container white'>
        <Form setCategory={setCategory} />
        <List news={news} />
      </div>
    </>
  );
}

export default App;
