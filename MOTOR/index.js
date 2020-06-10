
var pics = document.getElementById("evaluation-pic")
var index = 0
var arr = ['a','b','c','d']
setInterval(function(){
    if ( index > 3) {
        index = 0
    }
    pics.innerHTML = "<img src='images/pic-lb-" + index + ".jpg'>" + "<img id='hot' src='images/hot.png'>"
    index++
},3000)

// var arr = ['这是第一辆摩托车','这是第二辆摩托车','这是第三辆摩托车','这是第四辆摩托车']
// var index = 0
// var p = document.querySelector('.fixed-test')    
// setInterval(function () {
//     if (index > 3) {
//         index = 0
//     }
//     p.innerHTML = arr[index]
//     index++
// },3000)
//  console.log(p)
