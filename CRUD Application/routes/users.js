import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const users = [
    {
        firstname: "Vikrant",
        secondname: "Sharma",
        age: 21
    },
    {
        firstname: "Sanya",
        secondname: "Kumari",
        age: 20
    }
];

//all routes are starting with /users
router.get('/',(req, res)=>{
    res.send(users);
});

router.post('/',(req, res)=>{
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`${user.firstname} added to the database`);
});


export default router;