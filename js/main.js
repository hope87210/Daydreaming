var block1 = document.querySelector("#block1");
var block2 = document.querySelector("#block2");
var block3 = document.querySelector("#block3");
var block4 = document.querySelector("#block4");

block1.onmouseover = in1;
function in1() {
	document.querySelector("#block2").style.opacity = "0.8";
	document.querySelector("#block3").style.opacity = "0.8";
	document.querySelector("#block4").style.opacity = "0.8";
}
block1.onmouseout = leave1
function leave1() {
	document.querySelector("#block2").style.opacity = "0";
	document.querySelector("#block3").style.opacity = "0";
	document.querySelector("#block4").style.opacity = "0";
}

block2.onmouseover = in2;
function in2() {
	document.querySelector("#block1").style.opacity = "0.8";
	document.querySelector("#block3").style.opacity = "0.8";
	document.querySelector("#block4").style.opacity = "0.8";
}
block2.onmouseout = leave2
function leave2() {
	document.querySelector("#block1").style.opacity = "0";
	document.querySelector("#block3").style.opacity = "0";
	document.querySelector("#block4").style.opacity = "0";
}

block3.onmouseover = in3;
function in3() {
	document.querySelector("#block2").style.opacity = "0.8";
	document.querySelector("#block1").style.opacity = "0.8";
	document.querySelector("#block4").style.opacity = "0.8";
}
block3.onmouseout = leave3
function leave3() {
	document.querySelector("#block2").style.opacity = "0";
	document.querySelector("#block1").style.opacity = "0";
	document.querySelector("#block4").style.opacity = "0";
}

block4.onmouseover = in4;
function in4() {
	document.querySelector("#block2").style.opacity = "0.8";
	document.querySelector("#block3").style.opacity = "0.8";
	document.querySelector("#block1").style.opacity = "0.8";
}
block4.onmouseout = leave4
function leave4() {
	document.querySelector("#block2").style.opacity = "0";
	document.querySelector("#block3").style.opacity = "0";
	document.querySelector("#block1").style.opacity = "0";
}