import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
function App() {
  return (
    <>
      <Header title='News' />
      <div className='container white'>
        <Form />
      </div>
    </>
  );
}

export default App;
