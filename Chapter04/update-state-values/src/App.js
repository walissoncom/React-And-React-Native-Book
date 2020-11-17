import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Walisson');
  const [age, setAge] = useState(25);

  return (
    <>
      <section>
        <input value={name} onChange={e => setName(e.target.value)} />
        <p>My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
      </section>
    </>
  )
}