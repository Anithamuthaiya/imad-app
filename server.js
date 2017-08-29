var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto=require('crypto');
var bodyParser=require('body-parser');



var config = {
    user:'anithamuthaiya',
    database:'anithamuthaiya',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:db-anithamuthaiya-50927
};


var app = express();
var articles={ 
    'article-one':{
    title: 'articleone/Anitha',
    heading: 'articleone',
    date: 'August 10,2017',
    content:`
            <p>
                This is my First content for my first article
            </p>
     
      
            <p>
                This is my First content for my first article
            </p>
    
   
            <p>
                This is my First content for my first article
            </p>`
     
},
   'article-two':{
       title: 'articletwo/Anitha',
    heading: 'Article Two',
    date: 'August 11,2017',
    content:`
            <p>
                This is my First content for my second article
            </p>
     
      
            <p>
                This is my First content for my second article
            </p>
    
   
            <p>
                This is my First content for my second article
            </p>`
     },
   'article-three':{
       title: 'articlethree/Anitha',
    heading: 'Article Three',
    date: 'August 12,2017',
    content:`
            <p>
                This is my First content for my Third article
            </p>
     
      
            <p>
                This is my First content for my Third article
            </p>
    
   
            <p>
                This is my First content for my Third article
            </p>`
     }
     
};
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate= ` <html>
    <head>
        <title>
           ${title}
            <meta name="viewport"content="width=device_width,initial_scale=1"/>
        </title>
    
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
         <div>
         <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
         ${date}
        </div>
        <div>
            ${content}
        </div>
        <div>
        <label for="text"> enter your name </label>
        <div>
        <input type="text" id="name" placeholder=""; "background-color:gold">
        </input>
        </div>
        <br>
        <label for="text"> enter your comments here </label>
        <div>
        <textarea name="comments" id="comment" style="font-family:sans-serif;font-size:2.0em;background-color:gold">
      
        </textarea>
        </div>
       </br>
        <input type="submit" value="Submit" id=submit_btn>
         </div>
         <div>
         <ul id="namelist1"></ul>
         </div>
        
        <script type="text/javascript" src="/ui/main.js">  </script>
   
    </body>
</body>
 </html>`;
  
return htmltemplate;
}


app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return["pbkf2Sync","10000",salt,hashed.toString('hex')].join('$');
}

app.get('/hash/:input',function(req,res)
{
    var hashedString=hash(req.params.input,'this-is-some-random-string');
    s.send(hashedString);
});

var pool=new Pool(config);
app.post('/create-user',function(req,res)
{
    
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    var dbString=hash(password,salt);
    pool.query('INSERT INTO "user" (user,password)VALUES($1,$2)',[username,dbString],function(err,result)
    {
        if (err){
            res.status(500).send(err.toString());
        }
        else
        {
            res.send('user sucessfully created' +username);
        }
        
    });
});

counter=0;
app.get('/counter',function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function(req,res){
    var name=req.query.name;
    names.push(name);
    
res.send(JSON.stringify(names));
});


var names1=[];
app.get('/submit-name', function(req,res){
    var name=req.query.name;
    names1.push(name);
    
res.send(JSON.stringify(names1));
});

app.get('/:articleName',function(req,res){
var articleName=req.params.articleName;
res.send( createTemplate(articles[articleName]));
});









app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


 

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
