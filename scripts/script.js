// SCROLL ANIMATION

$('nav a').click(function(evt){
    evt.preventDefault();
    var headerHeight = 100;
    var $target = $(this.hash);
    var targetTop = $target.offset().top - headerHeight;
    // console.log("Event: ", evt);

    $('body').animate({
      scrollTop:targetTop
    },1000,"swing")
  })


// CRAPPY JS ANIMATION CODE

// let scrollY = 0;
// let distance = 10;

// function autoScrollTo(el){
// 	let currentY = window.pageYOffset;
// 	let targetY = document.getElementById(el).offsetTop;
// 	let bodyHeight = document.body.offsetHeight;
// 	let yPos = currentY + window.innerHeight;
// 	let animator = setTimeout('autoScrollTo(\''+el+'\')', 10);

// 	if(yPos > bodyHeight){
// 		clearTimeout(animator);
// 	} else {
// 		if(currentY < targetY - distance){
// 			scrollY = currentY + distance;
// 			window.scroll(0, scrollY);
// 		} else {
// 			clearTimeout(animator);
// 		}
// 	}
// }