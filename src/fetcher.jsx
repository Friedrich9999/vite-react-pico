import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';

function Fetcher() {

  const {data} = useQuery({
    queryKey: ['test'],
    queryFn: getTodos
  })

  return (
    <>
        <h1>{JSON.stringify(data?.slice(0,10))}</h1>
    </>
  )
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  return await response.json()
}

export default Fetcher
