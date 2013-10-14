var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.logger());

/////////////////////////////////////////////////////////////////////////
//Define Routes
app.get("/", function(req, res) {
    fs.readFile(__dirname + "/html/index.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/index.html", function(req, res) {
    fs.readFile(__dirname + "/html/index.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/Eateries.html", function(req, res) {
    fs.readFile(__dirname + "/html/Eateries.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/Kernels.html", function(req, res) {
    fs.readFile(__dirname + "/html/Kernels.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/Softwares.html", function(req, res) {
    fs.readFile(__dirname + "/html/Softwares.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/Books.html", function(req, res) {
    fs.readFile(__dirname + "/html/Books.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/DailyBuildEvals.html", function(req, res) {
    fs.readFile(__dirname + "/html/DailyBuildEvals.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/TeamMembers.html", function(req, res) {
    fs.readFile(__dirname + "/html/TeamMembers.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});

app.get("/About.html", function(req, res) {
    fs.readFile(__dirname + "/html/About.html", function(err, data) {
        if(err) {throw err;}
        res.send(data.toString());
    });
});


/////////////////////////////////////////////////////////////////////////////
//configure express to server static files
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/library", express.static(__dirname + "/library"));
//app.use("\/[a-z0-9]+\.html", express.static(__dirname + "/html"));
//app.use("/static", express.static(__dirname + "/html"));

//Listen to incoming requests
var port = process.env.PORT || 2323;
app.listen(port);
console.log("Server Listening on port : " + port);
