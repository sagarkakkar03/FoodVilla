import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError(); //will get me all the erros in the path
  console.log(error)
  return (
    <div>
      <h1>Oopsie, we will be back in a while</h1>
      <h1>Sorry for the inconvience caused</h1>
      <h3>{error.status} : {error.statusText}</h3>
    </div>
  )
}

export default Error
