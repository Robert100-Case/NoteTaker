const express = require('express');
const { Server } = require('http');
const path = require('path');

const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
let saveNoteBtn;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    fs.appendFile('./db/db.json', 'color', (err) =>
    err ? console.error(err) : console.log("file added")
  );

})
app.use("/notes", (req, res) => {

  
    //alert("using notes");
  
    res.sendFile(path.join(__dirname, "./public/notes.html"));
      //saveNoteBtn = document.querySelector('#notesave');
  //  saveNoteBtn.addEventListener('click', function(){alert("icon clicked")})
   // document.getElementById("notesave").onclick = function() {alert("click icon worked");}

 })
app.get('/gettest', (req, res) => {
   console.log("gettest route reached");//alert("using get");
    // res.send('Welcome to the Star Wars Page!');
  });
  
  app.post('/api/notes', (req, res) => {
    console.log("note.html reached");//alert("saving note");
      res.send('Welcome to the Star Wars Page!');
   });
 

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

//module.exports = function callserv()
//{alert("on click function in Server.js called");}

