console.log('Loaded!');

var element= document.getElementById('main-text');
element.innerHTML ='New value';

var img = document.getElementById('modi');
var marginleft=0;
function moveRight(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft + 'px' ;
}
img.onclick=function(){
var interval=SetInterval(moveRight,100);
}