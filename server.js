var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
    var htmltemplate= `<html>
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
        
        </div>
        </body>
        </html>`;
  return htmltemplate;
}


app.use(morgan('combined'));

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName',function(req,res){
var articleName=req.params.articleName;
res.send( createTemplate(articles[articleName]));
});
var counter=0;
app.get('/counter',function(req,res){
 counter=counter+1;
 res.send(counter.toString());
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
