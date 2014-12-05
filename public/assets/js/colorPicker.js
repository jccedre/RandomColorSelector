var main = function() {
	$('.btn').click(function() {
		var colorArray = ["aqua","black","blue","fuchsia"
			, "gray", "green", "lime", "maroon", "navy", "olive"
			, "orange", "purple", "red", "silver", "teal", "white"
			, "yellow", "aliceblue", "antiqueWhite", "Aquamarine"];
			
			
		var x = Math.floor((Math.random() * colorArray.length) + 1);	
		
		$('body').css('background-color', colorArray[x]);
	});
};

$(document).ready(main);