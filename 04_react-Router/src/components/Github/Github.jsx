import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  //   //ApI Call When the component is loaded
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/pritiparkhe')
  //       .then(response => response.json())
  //       .then(data =>{
  //         console.log(data);
  //         setData(data)
  //       })
  //   },[])
  return (
    <div className='text-center  m-4 bg-gray-600 text-whitep-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture"  width={300} /></div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/pritiparkhe')
  return response.json()
}