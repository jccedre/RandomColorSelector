/* Jean Carlos Cedré
   Created this function that targets the class .btn
   and stores different color vaules in an array called colorArray.
   Then a random number is used to "randomly" select the color to be displayed
   when the user clicks on the button.

*/

//main function
var main = function() {
	//btn.click function
	$('.btn').click(function() {
	
		//colorArray
		var colorArray = ["aqua","azure","bisque", "#C887FF"
			, "gray", "#66B366", "#4DFF4D", "#A64D4D", "#8080C0", "#B3B366"
			, "orange", "beige", "#FF8080", "silver", "teal", "white"
			, "#FFFF80", "aliceblue", "antiqueWhite", "aquamarine"
			, "#6487FF", "#7FB1B3", "#E09662", "#FF7F50"
			, "#6495ED", "#E34363", "cyan", "#99FFFF"
			, "#B8860B", "#4D924D", "darksalmon", "darkslategray"
			, "darkturquoise", "deepblue", "#FF72BE", "gold"
			, "greenyellow", "hotpink", "indianred", "#814DA8"
			, "lavender", "lemonchiffon"];
			
		//variable x that is assigned a random number starting from 0
		//to the length of the array.
		var x = Math.floor((Math.random() * (colorArray.length + 1)));	
		
		//target the body class and change the background color
		$('body').css('background-color', colorArray[x]);
	});
};

//load the code when document is ready.
$(document).ready(main);