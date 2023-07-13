const express = require("express");

const port =5000; 

const app =express();

// app.get("/post", (req, res)=>{
//     res.json({
//         message :"voici les données  de raoul!"
//     });
// }); 
 
// Midleare qui permet de traiter les donées de la request 

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/post", require("./routes/post.routes"));

// app.post("/post", (req,res) =>{
//     res.json({
//         message: req.body.message,
//          author: req.body.author
//     });
//     });

// Lancer le serveur

app.listen(port, ()=>{ console.log(`le serveur a demarer au port ${port}`)
});