import Card from '../UI/Card';
import classes from './UserFormInput.module.css'

const UserFormInput = () =>{

    return(
       
       <Card className={classes.input}>
            <form>
                <label>username:</label>
                <input/>
                <label>age:</label>
                <input/>
            </form>
       </Card>
       
    )

};


export default UserFormInput;