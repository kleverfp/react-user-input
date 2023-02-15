import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './UserFormInput.module.css'

const UserFormInput = () =>{

    return(
       
       <Card className={classes.input}>
            <form>
                <label>username:</label>
                <input/>
                <label>age:</label>
                <input/>
                <Button type="submit">Add User</Button>
            </form>
       </Card>
       
    )

};


export default UserFormInput;