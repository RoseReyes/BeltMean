
var c = require("../controllers/pets")();
var path = require('path');

module.exports = (app) =>{
    
    app.get('/public', (req, res) =>{
        c.displayPets(req, res);
    });

    app.post('/public', (req, res) =>{
        c.createPets(req, res);
    });

    app.put("/public/:id", (req, res) =>{
        c.editPet(req,res);
    });

    app.get("/onepublic/:id", (req, res) =>{
        c.findOnePet(req, res);
    });

    app.post("/newpublic/:id", (req, res) =>{
        c.createQuote(req, res);
    })

    app.delete('/newpublic/:id', (req, res) =>{
        c.deletePet(req, res);
    });

    app.post('/updatepublic/:id', function (req, res) {
        c.updateVote(req, res);
    });

    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./beltpreps/dist/beltpreps/index.html"))
    });

    
}