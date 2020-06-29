import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  const [state, setState] = useState(initialState);
  const Selection = () => (
    <select
      className='browser-default'
      value={state}
      onChange={(e) => setState(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return [state, Selection];
};

export default useSelect;
