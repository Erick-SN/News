import React from 'react';
import News from './News';
const List = ({ news }) => {
  return (
    <>
      <div className='row'>
        {news.map((newsItem) => (
          <News key={newsItem.url} newsItem={newsItem} />
        ))}
      </div>
    </>
  );
};

export default List;
