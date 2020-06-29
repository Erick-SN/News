import React from 'react';
import News from './News';
import PropTypes from 'prop-types';
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
List.propTypes = {
  news: PropTypes.array.isRequired,
};
export default List;
