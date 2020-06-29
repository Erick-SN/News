import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';
const Form = ({ setCategory }) => {
  const OPTIONS = [
    {
      value: 'general',
      label: 'General',
    },
    {
      value: 'business',
      label: 'Business',
    },

    {
      value: 'entertainment',
      label: 'Entertainment',
    },

    {
      value: 'health',
      label: 'Health',
    },

    {
      value: 'science',
      label: 'Science',
    },

    {
      value: 'sports',
      label: 'Sports',
    },

    {
      value: 'technology',
      label: 'Tecnology',
    },
  ];
  const [category, SelectNews] = useSelect('general', OPTIONS);
  const onSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
  };
  return (
    <>
      <div className={`${styles.buscador} row`}>
        <div className='col s12 m8 offset-m2'>
          <form onSubmit={onSubmit}>
            <h2 className={styles.heading}>Find News</h2>
            <SelectNews />
            <div className='input-field col s12'>
              <input
                type='submit'
                className={`${styles['btn-block']} btn btn-large amber darken-2`}
                value='Search'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default Form;
