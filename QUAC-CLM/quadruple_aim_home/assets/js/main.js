// JavaScript Document
document.ontouchmove = function(e) {
    e.preventDefault();
};

var touchstartOrClick = "";
var isiPad = navigator.platform.indexOf("iPad") != -1;
isiPad ? touchstartOrClick = "touchstart" : touchstartOrClick = "click";

var count = 0;
var ready = true;


$(document).ready(function(){
	
	
});