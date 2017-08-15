//console.log('Loaded!');

var button= document.getElementById('counter');
button.onclick=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('counter');
                span.innerHTML=counter.toString();
            }
        }
        
    };
    request.open('GET','http://anithamuthaiya.imad.hasura-app.io/counter',true);
    request.send(null);
}; 
    
  
    
    var submit=document.getElementById('submit_bn');
submit.onclick=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                 var list='';
                 for(var i=0; i<names.length; i++)
        {
            list += '<li>'+names[i]+ '</li>';
            
        }
         var ul =document.getElementById('namelist');
            ul.innerHTML=list;
    
               
            }
        }
        
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://anithamuthaiya.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
}; 
    
    
    
    var submit=document.getElementById('comment');
submit.onclick=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var comment=request.responseText;
                comments=JSON.parse(comments);
                 var list='';
                 for(var i=0; i<comments.length; i++)
        {
            list += '<li>'+comments[i]+ '</li>';
            
        }
        
        var ul =document.getElementById('namelist');
            ul.innerHTML=list;
            
          ul =document.getElementById('commentlist');
            ul.innerHTML=list;
    
               
            }
        }
        
    };
    var commentInput=document.getElementById('comment');
    var comment=commentInput.value;
    request.open('GET','http://anithamuthaiya.imad.hasura-app.io/submit?comment='+comment,true);
    request.send(null);
}; 
    
  

