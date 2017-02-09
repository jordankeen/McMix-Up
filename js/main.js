
// Document Ready
$(function() {

	// Smooth scroll on click
	$('.begin').on('click', function(){
		$.smoothScroll({
			scrollTarget: '.section-one'
		});
	});
	$('input[name=habit]').on('change', function(){
		$.smoothScroll({
			scrollTarget: '.section-two'
		});
	});
	$('input[name=state]').on('change', function(){
		$.smoothScroll({
			scrollTarget: 'footer'
		});
	});
	// Form submission function begins
	$('form').on('submit', function(event) { 

		event.preventDefault();
		// Show Loading screen
		$('.loading-screen').show();
		// Message from Ronald
		console.log("You've been SUPERSIZED.");

		// Variables stored for selected choices
		var habitChoice = $('input[name=habit]:checked').val();
		var stateChoice = $('input[name=state]:checked').val();

		// Function for the solution to your hunger
		var solution = function() {

			if (habitChoice === "none" && stateChoice === "state1") {
				$('.picture2').show();
			} else if (habitChoice === "none" && stateChoice === "state2") {
				$('.picture1').show();
			} else if (habitChoice === "none" && stateChoice === "state3") {
				$('.picture5').show();
			} else if (habitChoice === "clean" && stateChoice === "state4") {
				$('.picture8').show();
			} else if (stateChoice === "state4") {
				$('.picture8').show();
			} else if (habitChoice === "clean") {
				$('.picture7').show();
			} else if (habitChoice === "messy" && stateChoice === "state1") {
				$('.picture1').show();
			} else if (habitChoice === "messy" && stateChoice === "state2") {
				$('.picture2').show();
			} else if (habitChoice === "messy" && stateChoice === "state3") {
				$('.picture3').show();
			} else if (habitChoice === "weird" && stateChoice === "state1") {
				$('.picture4').show();
			} else if (habitChoice === "weird" && stateChoice === "state2") {
				$('.picture5').show();
			} else if (habitChoice === "weird" && stateChoice === "state3") {
				$('.picture6').show();
			} else {
				$('.picture9').show();
			}
			// On submission of form, hide form, footer, and header.
			$('form').hide();
			$('footer').hide();
			$('header').hide();
		};
		// Run Solution
		solution();
		// Function for fadeout of loading screen
		function loadingFadeOut() {
			$(".loading-screen").fadeOut();
		}
		// Run loadingFadeOut() with timeout delay
		setTimeout(loadingFadeOut, 1500);

	});

});