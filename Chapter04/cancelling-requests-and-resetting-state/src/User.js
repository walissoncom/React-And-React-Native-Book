import React, { useEffect, useState } from 'react';
import { Promise } from 'bluebird';

Promise.config({ cancellation: true });

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Walisson' });
        }, 1000);
    });
}

export default function Use() {
    const [id, setId] = useState('Loading...');
    const [name, setName] = useState('Loading...');

    useEffect(() => {
        const promise = fetchUser().then(user => {
            setId(user.id);
            setName(user.name);
        });

        return () => {
            promise.cancel();
        };
    });

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    )
}