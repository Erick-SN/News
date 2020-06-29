import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  const [state, setState] = useState('');
  const Selection = () => (
    <select className='browser-default'>
      <option value=''>Select</option>
    </select>
  );
  return [state, Selection];
};

export default useSelect;
