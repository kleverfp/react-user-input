
import Card from '../UI/Card/Card';
import classes from './ListUsers.module.css'

const ListUsers = (props)=>{

    let showListUsers = <p className={classes.noUsers}>No users Added !!</p>

    if(props.usersListValues.length > 0){
        showListUsers = 
        <ul>
            {
                props.usersListValues.map((userData)=>{
                    return  <li>{userData.name} {userData.age} years old</li>
                })
            }
        </ul> 
    }

    return(
        <Card className={classes.listUsers}>
            {showListUsers}
        </Card>
    )
}

export default ListUsers;