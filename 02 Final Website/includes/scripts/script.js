/*
My Custom JS
=============

Author:  Jeremy Charles Mallari
Updated: September 2015
Notes:	 Single Page Responsive Website Using Bootstrap 3
Course Files: https://github.com/charlesm31/Bootstrap3

*/

$(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
	
});