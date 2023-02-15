import { useState } from 'react';
import './App.css';
import ListUsers from './components/ListUsers/ListUsers';
import UserFormInput from './components/Users/UserFormInput';

function App() {

  const [userData,setUserData] = useState([]);

  const onAddNewUserDataHandler = (newUserData)=>{
    setUserData((oldValues)=>{
      return [...oldValues,newUserData]
    })
  };
  return (
    <div>
      <UserFormInput onAddNewUserData={onAddNewUserDataHandler}/>
      <ListUsers usersListValues={userData}></ListUsers>
    </div>
  );
}

export default App;
