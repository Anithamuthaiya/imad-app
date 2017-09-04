//console.log('Loaded!');

var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                console.log('user logged in');
                alert('user logged sucessfully');
                }
                else if(request.status === 403){
                    alert('username/password is incorrect');
                }
                else if(request.status === 500){
                    alert('something went wrong on system');
                }
        }
        
    };
    var username=document.getElementById('username').value;
     var password=document.getElementById('password').value;
     console.log(username);
     console.log(password);
    request.open('POST','http://anithamuthaiya.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));
}; 
    
    
   
    
  

