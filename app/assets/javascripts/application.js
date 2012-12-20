// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

	//
	// Set each stuff span to 0 opacity and animate to fully opaque. 
	// Used a series of delay methods to create cascade effect
	//

	$("#line1").delay(100).animate( {opacity: 1 } , 700);  				
			
	$("#line2").delay(15000).animate( {opacity: 1 } , 700);

	$("#line3").delay(900).animate( {opacity: 1 } , 700);
	
	$("#line4").delay(1300).animate( {opacity: 1 } , 700);
	
	$("#line5").delay(1700).animate( {opacity: 1 } , 700);
	
	$("#line6").delay(3000).animate( {opacity: 1 } , 700);
	
	$("#line7").delay(3800).animate( {opacity: 1 } , 700);

	$("#line8").delay(3000).animate( {opacity: 1 } , 700);
	
	$("#line9").delay(3800).animate( {opacity: 1 } , 700);

	$("#line10").delay(3800).animate( {opacity: 1 } , 700);

	$("#line11").delay(3800).animate( {opacity: 1 } , 700);

	$("#line12").delay(3800).animate( {opacity: 1 } , 700);

	$("#line13").delay(3000).animate( {opacity: 1 } , 700);

});
