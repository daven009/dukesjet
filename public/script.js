$(document).on("ready", function(){
	"user strict";

	/*=========================================================================
    Count Down Timer
	=========================================================================*/
	var countDownDate = new Date("Nov 15, 2017 00:00:00").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {

	    // Get todays date and time
	    var now = new Date().getTime();
	    
	    // Find the distance between now an the count down date
	    var distance = countDownDate - now;
	    
	    // Time calculations for days, hours, minutes and seconds
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	    // Output the result in an element with id="demo"
	    document.getElementById("timer").innerHTML = "<div class=\"box long\"><h1 id=\"day\" class=\"dinamic\">" + days + "</h1> <label class=\"static\">Days</label> </div>" + "<div class=\"box short\"><h1 id=\"hour\" class=\"dinamic\">" +hours + "</h1> <label class=\"static\">Hours </label></div>" + " <div class=\"box short\"><h1 id=\"minutes\" class=\"dinamic\"> " + minutes + "</h1> <label class=\"static\">Minutes</label> </div>" + "<div class=\"box long\"><h1 id=\"second\" class=\"dinamic\">" + seconds + "</h1> <label class=\"static\">Second</label></div> ";
	    
	    // If the count down is over, write some text 
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById("timer").innerHTML = "EXPIRED";
	    }
	}, 1000);

	/*=========================================================================
    When window load finish, loader will fadeout / hide
	=========================================================================*/
	$(window).on('load', function() {
        $('.loader').fadeOut();
    });

	/*=========================================================================
    Open form
	=========================================================================*/
	$(".contactnow").on("click", function(){
		$('.wrappingform').removeClass('hideform');
	});

	/*=========================================================================
    Close form
	=========================================================================*/
	$(".closebtn").on("click", function(){
		$('.wrappingform').addClass('hideform');
	});


});