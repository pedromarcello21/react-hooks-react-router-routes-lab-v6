import React from 'react'
import { useRouteError } from 'react-router-dom'
import NavBar from './components/NavBar';

export default function Error() {
    const error = useRouteError();
  return (
    <>
        <NavBar />
        <h1>Yikes something went wrong</h1>
    </>
  )
}
