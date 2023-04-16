import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import List from './components/List';
import Details from './components/Details';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([])
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(response => {
      console.log(response.data);
      setUsers(prevState => (
        [ ...prevState, ...response.data ]
      ));
    })
    .catch(error => {
      console.log(error);
    });
  }, [])


  const handleClick = (user) => {
    setUserInfo(user);
  };

  return (
    <div className=' flex mr-4'>
        <List items={ users } onClick={ handleClick }/>
        { userInfo && <Details info={ userInfo }/> }
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));