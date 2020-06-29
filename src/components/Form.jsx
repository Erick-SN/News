import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
const Form = () => {
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
  return (
    <>
      <div className={`${styles.buscador} row`}>
        <div className='col s12 m8 offset-m2'>
          <form>
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

export default Form;
