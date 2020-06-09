//获取容器
var pics = document.getElementById("pic");

//设置时钟控件
var n=1;
setInterval(function(){
    if(n>4) n=1;
    pics.innerHTML="<img src='images/pic"+n+".jpg'>";
    n++;
},5000);