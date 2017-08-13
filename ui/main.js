console.log('Loaded!');

var element= document.getElementById('main-text');
element.innerHTML ='New value';

var img = document.getElementById('modi');
var marginleft=0;
function MoveRight(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft;
}
img.onclick=function(){
var interval=SetInterval(MoveRight,100);
}