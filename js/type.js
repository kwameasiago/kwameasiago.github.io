
let message;
let width = screen.width;
console.log(width)
if(width <= 425 && width >= 393){
    message = largePhone;
}
else if(width <= 393){
    message = smallPhone;
    console.log(width)
}
else {
    message = Desktopmessage;
}


var options = {
    strings: message,
    typeSpeed: 20, 
    showCursor: false, 
    backSpeed: 0, 
    backDelay: 500,
    autoInsertCss: true
};

var typed = new Typed('#type', options);