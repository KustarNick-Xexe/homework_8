import React, { useState } from 'react';

const List = ({ items, onClick }) => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleClick = (item) => {
    setActiveItemId(item.id);
    onClick(item);
  };

  return (
    <ul className='border-2 border-gray-300 rounded-lg m-4 h-fit'>
      {items.map((item) => (
        <li
          className={
            'w-80 p-4 border-b-2 border-gray-300 last:border-none first:rounded-t-lg last:rounded-b-lg ' +
            (activeItemId === item.id ? 'bg-blue-700' : 'bg-white')
          }
          key={item.id}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;