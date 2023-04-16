import React from 'react';

const List = ({ items, onClick }) => {

  const handleClick = (user) => {
    onClick(user);
  }

  return (
    <ul className='border-2 border-gray-300 rounded-lg m-4 h-fit'>
        { items.map( item => <li 
            className='w-80 p-4 border-b-2 border-gray-300 last:border-none hover:bg-blue-700 first:rounded-t-lg last:rounded-b-lg hover:text-white' 
            key={ item.id }
            onClick={ () => handleClick({ id: item.id, name:item.name }) }>{ item.name }</li>) }
    </ul>
  )
};

export default List;