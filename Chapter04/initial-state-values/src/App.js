import React, { useState } from 'react';

export default function App() {
  const [name] = useState('Walisson');
  const [age] = useState(25);

  return (
    <>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </>
  )
}