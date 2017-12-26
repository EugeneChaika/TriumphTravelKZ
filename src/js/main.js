/*
 * Third party
 */
//= ../libs/jquery/dist/jquery.js
//= ../libs/OwlCarousel2/dist/owl.carousel.min.js




/*
 * Custom
 */
//= partials/app.js
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
$(function() {

	// Custom JS

});
