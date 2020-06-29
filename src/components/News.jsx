import React from 'react';
const News = ({ newsItem }) => {
  const { urlToImage, url, title, description, source } = newsItem;
  const image = urlToImage ? (
    <div className='card-image'>
      <img src={urlToImage} alt={title} />
      <span className='card-title'>{source.name}</span>
    </div>
  ) : null;
  return (
    <>
      <div className='col s12 m6 14'>
        <div className='card'>
          {image}
          <div className='card-content'>
            <h6>{title}</h6>
            <p>{description}</p>
          </div>

          <div className='card-action'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='waves-effect waves-light btn'>
              View full article
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
