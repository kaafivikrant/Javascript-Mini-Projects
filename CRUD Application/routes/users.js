import express from 'express';
//imported express to run the node js with routes 
import {v4 as uuidv4} from 'uuid';
//imported to generate the unique id of the specific user

const router = express.Router();
//route variable

let users = [];
//array of the local database

//-----------------------------------------------------------------------------------------

//all routes are starting with /users

router.get('/',(req, res)=>{
    res.send(users);
});
//getting all the users on the home 


router.post('/',(req, res)=>{
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`${user.firstname} added to the database`);
});
//sending post request with the data and it adds a specific unique Id to each user

router.get('/:id',(req, res)=>{

    const {id} = req.params;

    const foundUser = users.find((user)=> user.id ===id);

    res.send(foundUser);
});
//sending information about the user when we provide specific Id

router.delete('/:id',(req, res) =>{
    const {id} = req.params;

    users = users.filter((user)=>user.id !== id);

    res.send(`User with ${id} deleted`);
});
//deleting information about the user when we provide specific Id

router.patch('/:id',(req, res) =>{
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;
    const user = users.find((user) => user.id == id);

    if(firstname) user.firstname = firstname;
    
    if(lastname) user.lastname = lastname;
    
    if(age) user.age = age;

    res.send(`User with ${id} has been updated`);
    
});
//We can change the specific information about the user by providing specific Id

export default router;