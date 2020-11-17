import React, { useState } from 'react';
import User from './User';

const ShowHideUser = ({ show }) => (show ? <User /> : null);

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide User' : 'Show User'}
      </button>
      <ShowHideUser show={show} />
    </>
  );
}