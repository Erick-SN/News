import React from 'react';
import PropTypes from 'prop-types';
const Header = ({ title }) => {
  return (
    <>
      <nav className='nav-wrapper light-blue darken-3'>
        <a href='#!' className='brand-logo center'>
          {title}
        </a>
      </nav>
    </>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
