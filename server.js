const express = require('express');
const { Server } = require('http');
const path = require('path');

const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
let saveNoteBtn;
var notedata;
let temp;
let temp2;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    //fs.appendFile('./db/db.json', 'color', (err) =>
    //err ? console.error(err) : console.log("file data added")
  //);

})
app.get("/notes", (req, res) => {

  
    //alert("using notes");
  
    res.sendFile(path.join(__dirname, "./public/notes.html"));
    console.log("notes reached");
      //saveNoteBtn = document.querySelector('#notesave');
  //  saveNoteBtn.addEventListener('click', function(){alert("icon clicked")})
   // document.getElementById("notesave").onclick = function() {alert("click icon worked");}

 })
app.get('/gettest', (req, res) => {
   console.log("gettest route reached");//alert("using get");
    // res.send('Welcome to the Star Wars Page!');
  });
  
  app.post('/api/notes', (req, res) => {
    console.log("notetaker post");//alert("saving note");
      res.send('Welcome to the Star Wars Page!');
    /*  fs.readFile('./db/db.json', 'notedata', (err) =>
      err ? console.error(err) : console.log("file data read")
    );*/
    fs.readFile('./db/db.json', 'utf8', function (err, notedata) {
      if (err) {
        return console.log(err);
      }
      //console.log(data);
     temp=JSON.parse(notedata);
      temp.push(req.body);
    console.log(temp);
    //temp2=JSON.stringify(temp);  
       });
    fs.writeFileSync('./db/db.json', JSON.stringify(temp), (err) =>
    err ? console.error(err) : console.log("db file written too")
  );

     //console.log(req.body);
   });
 
   app.get('/api/notes', (req, res) => {
    console.log("notetaker get");//alert("using get");
     // res.send('Welcome to the Star Wars Page!');
   });
 
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

//module.exports = function callserv()
//{alert("on click function in Server.js called");}

