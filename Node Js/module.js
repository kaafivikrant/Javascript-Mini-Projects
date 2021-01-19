//npm module

// const color = require('cli-color');
// const { register } = require('./auth.js');
// const auth  = require('./auth.js');

// auth.register('Vikrant');
// auth.login('Vikrant','Password');


//register('Vikrant');
//console.log(color.red('Hellow'));

 const path = require('path');

// //console.log(__filename);

// //Folder Name
// console.log('Folder Name:- ',path.dirname(__filename));

// //File Name
// console.log('File Name:- ',path.basename(__filename));

// //Extension Name

// console.log('Extension Name:- ',path.extname(__filename));

// //Pares Name

// console.log('Parse:- ',path.parse(__filename));

// //Join

// console.log('File Name:- ',path.join(__dirname,'order','app.js'));

//File system module

//const fs = require('fs');

//Making the folder

// fs.mkdir(path.join(__dirname,'/test'),(err) =>{
//     if(err){
//         console.log('Error Occurred');
//         console.log(err);
//         return;
//     }

//     console.log('Folder Created');
// })

//Creating the file

//writefile overwrite the strings
// fs.writeFile(path.join(__dirname, 'test','test.txt'),'Hellow Node \n',(err) =>{
//     if(err){
//         throw err;
//     }
//     fs.appendFile(path.join(__dirname, 'test','test.txt'),'More Data',(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('More data added');
//     })

//     console.log('File Created');
// })

//Read a file

// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     // const content = Buffer.from(data);

//     // console.log('Data:-');
//     // console.log(content.toString());

//     console.log(data);
// })



    // console.log('Data:-');
    // console.log(content.toString());

//Operating system

//const os = require('os');

//console.log('OS Type:-',os.type());

//console.log('Platform Type:-',os.platform());

//console.log('CPU Arch:-',os.arch());

//console.log('CPU Detail', os.cpus());

//console.log('Free Memory:-', os.freemem());

//console.log('Total Memory:-', os.totalmem());

//console.log('Up Time:-', os.uptime());

//Events Module

 const Emitter = require('events');
// const MyEmitter = new Emitter();

// MyEmitter.on('Vikrant', (data)=>{
//     console.log(data);
// })

// MyEmitter.emit('Vikrant',{
//     name: 'Vikrant',
//     profile: 'Student'
// });

class Auth extends Emitter{
    register(username){
        console.log('Registered Successfully');
        this.emit('registered',username);
    }
}

const auth = new Auth();

//Listen

auth.on('registered',(data)=>{
    console.log(`Sending Email ${data}`);
})

auth.register('Vikrant');