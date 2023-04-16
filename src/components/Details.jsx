import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Details = ({ info }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
    .then(response => {
      console.log(response.data);
      setUser(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [info]);

  return (
    <div className='border-2 border-gray-300 rounded-lg m-4 h-fit'>
        { user && 
          <>
            <img className=' bg-slate-600 object-cover w-full h-full rounded-t-lg' src={ user.avatar } alt="..." />
            <div className='w-80 p-4 border-b-2 border-gray-300 last:border-none text-xl pb-6'> {user.name} </div>
            <div className='w-80 p-4 border-b-2 border-gray-300 last:border-none'>City: {user.details.city}</div>
            <div className='w-80 p-4 border-b-2 border-gray-300 last:border-none'>Company: {user.details.company}</div>
            <div className='w-80 p-4 border-b-2 border-gray-300 last:border-none'>Position: {user.details.position}</div>
          </>
        }
    </div>
  )
};

export default Details;