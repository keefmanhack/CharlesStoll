var express 			= require("express"),
    app     			= express(),
    bodyParser			= require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public')); //for js scripts

app.get('/', function(req, res){
	res.render('landing');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);