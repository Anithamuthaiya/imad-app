//console.log('Loaded!');

var button= document.getElementById('counter');
button.onclick=function()
{
    var request= new XMLHTTPRequest();
    request.onreadystatechange=function(){
        if(request.readyState==XMLHTTPRequest.DONE){
            if(request.status==200){
                var counter=request.responseText;
                var span=document.getElementById('counter');
                span.innerHTML==counter.toString();
            }
        }
        
    };
    request.open('GET','http://anithamuthaiya.imad.hasura-app.io/counter',true);
    request.send(null);
};
