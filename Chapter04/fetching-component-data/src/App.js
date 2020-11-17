import React, { useEffect, useState } from 'react';

function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Walisson' })
    }, 2000)
  })
}

export default function App() {
  const [id, setId] = useState('Loading...');
  const [name, setName] = useState('Loading...');

  useEffect(() => {
    fetchUser().then(user => {
      setId(user.id);
      setName(user.name);
    })
  })

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  )
}