// SCROLL ANIMATION

$('nav a').click(function(evt){
    // prevents default action for the click event
    evt.preventDefault();
    // sets var for existing header height in px
    var headerHeight = 70;
    // sets var target to equal the destination of hash
    var $target = $(this.hash);
    // offsets the targetTop to equal the top - header height
    var targetTop = $target.offset().top - headerHeight;
    // console.log("Event: ", evt);

    $('body').animate({
      scrollTop:targetTop
    },1000,"swing")
})
  
// MOBILE HAMBURGER menubar

let hamburger = document.querySelector('.hamburger');
let ham1 = document.querySelector('.ham1');
let ham2 = document.querySelector('.ham2');
let ham3 = document.querySelector('.ham3');
let mobnav = document.querySelector('.mob-nav-menu');
let state = "closed";

// this function opens the hidden div with page links and adds animation styles to the three divs inside the hamburger menubar based on it being open or closed
function enambleHam(){
	if(state === "closed"){
		state = "open";
		ham1.style.animation = "ham1-open 0.3s forwards linear";
		ham2.style.animation = "ham2-open 0.3s forwards linear";
		ham3.style.animation = "ham3-open 0.3s forwards linear";
		mobnav.style["max-height"] = "250px";
		mobnav.style["margin-top"] = "70px";
	}
	else if(state === "open"){
		state = "closed";
		ham1.style.animation = "ham1-close 0.3s forwards linear";
		ham2.style.animation = "ham2-close 0.3s forwards linear";
		ham3.style.animation = "ham3-close 0.3s forwards linear";
		mobnav.style["max-height"] = "0";
		mobnav.style["margin-top"] = "0";
	}
}

hamburger.addEventListener('click', enambleHam);


