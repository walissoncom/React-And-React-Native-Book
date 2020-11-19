import React, { useContext } from 'react';
import { StatusContext } from './StatusContext';

function SetStatus() {
    const [status, setStatus] = useContext(StatusContext);
    return <input value={status} onChange={e => setStatus(e.target.value)} />;
}

export function Status() {
    const [status] = useContext(StatusContext);
    return <p>{status}</p>
}

export function Page1() {
    return (
        <>
            <h1>Page 1</h1>
            <SetStatus />
        </>
    )
}

export function Page2() {
    return (
        <>
            <h1>Page 2</h1>
        </>
    )
}

export function Page3() {
    return (
        <>
            <h1>Pag 3</h1>
            <SetStatus />
        </>
    )
}