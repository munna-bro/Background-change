var ImgBox = document.querySelector(".image-box");
var ImgWrap = document.querySelector(".image-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";
var leftSpace = ImgBox.offsetLeft;
 

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;          
}