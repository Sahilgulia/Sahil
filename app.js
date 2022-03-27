const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F'];
const generatorJs = document.getElementById('generator')

var hex = "#";

generatorJs.addEventListener('click',function(){
       var newColor = "#" + colors[randomNumber1()] + colors[randomNumber2()] + colors[randomNumber3()] + colors[randomNumber4()] + colors[randomNumber5()] + colors[randomNumber6()];
       
       document.getElementById("your").innerHTML = "Your color is : ";
       document.getElementById("colorname").innerHTML = newColor;
       document.getElementById("colorname").style.color = newColor;
       
      document.getElementById("colortype").style.backgroundColor = newColor;
       
       
                                                                  
       
                                                              
                                                                                                                    
});

function randomNumber1() {
    return Math.floor(Math.random() * colors.length)
};
function randomNumber2() {
    return Math.floor(Math.random() * colors.length)
};
function randomNumber3() {
    return Math.floor(Math.random() * colors.length)
};
function randomNumber4() {
    return Math.floor(Math.random() * colors.length)
};
function randomNumber5() {
    return Math.floor(Math.random() * colors.length)
};
function randomNumber6() {
    return Math.floor(Math.random() * colors.length)
};

