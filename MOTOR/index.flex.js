var pics = document.querySelector('.evaluation-pics')
var index = 0
setInterval (function() {
    if (index > 3) {
        index = 0
    }
    pics.innerHTML = "<img src='images/pic-lb-" + index + ".jpg'>" + "<img class='hot' src='images/hot.png'>"
    index++
},3000)
