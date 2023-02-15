import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './UserFormInput.module.css'

const UserFormInput = (props) =>{

    const [userData,setUserData]  =useState({
        age:'',
        name:''
    })

    const addUserHandler = (event)=>{
        event.preventDefault();
        props.onAddNewUserData(userData);
        setUserData({
            age:'',
            name:''
        })
    };

    const changeUserNameHandler = (event)=>{
        setUserData((oldValue)=>{
            return {...oldValue,name:event.target.value}
        })
    }

    const changeUserAgeHandler = (event) =>{
        setUserData((oldValue) =>{
            return {...oldValue,age:event.target.value}
        })
    }

    return(
       
       <Card className={classes.input}>
            <form>
                <label>username:</label>
                <input value={userData.name} onChange={changeUserNameHandler}/>
                <label>age:</label>
                <input value={userData.age} onChange={changeUserAgeHandler}/>
                <Button type="submit" onClick={addUserHandler}>Add User</Button>
            </form>
       </Card>
       
    )

};


export default UserFormInput;