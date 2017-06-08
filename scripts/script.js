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



