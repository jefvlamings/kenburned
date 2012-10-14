$(document).ready(function() {

	/* 
	 * Maintain Ratio & position
	 */
	var maintainRatio = function(){
		// Get measurements
		var wrapperWidth = $(window).width();
		var wrapperHeight = $(window).height();
		var wrapperRatio = wrapperWidth/wrapperHeight;
		var imageWidth = $(".images img").width();
		var imageHeight = $(".images img").height();
		var imageRatio = imageWidth/imageHeight;

		// Set CSS to center image in wrapper
		$(".images img").css({
			"top": "50%",
			"left": "50%"
		});

		// Set CSS properties of current image
		if(wrapperRatio < imageRatio){
			$(".images img").css({
				"height": wrapperHeight,
				"width": wrapperHeight*imageRatio,
				"margin-top": -(wrapperHeight/2),
				"margin-left": -(wrapperHeight*imageRatio/2)
			});
		}
		else{
			$(".images img").css({
				"height": wrapperWidth*(1/imageRatio),
				"width": wrapperWidth,
				"margin-top": -(wrapperWidth*(1/imageRatio)/2),
				"margin-left": -(wrapperWidth/2),
			});
		}		
	}

	/*
	 * Scale effect (CSS3)
	 */
	 var scale = function(factor,time){
	 	$(".images img").css({
		  "-webkit-transform": "scale(" + factor + ")",  // Safari 3.1+, Chrome 
		     "-moz-transform": "scale(" + factor + ")",  // Firefox 3.5+ 
		      "-ms-transform": "scale(" + factor + ")",  // IE9+ 
		       "-o-transform": "scale(" + factor + ")",  // Opera 10.50+ 
		          "transform": "scale(" + factor + ")",
		 "-webkit-transition": "-webkit-transform " + time + "s ease-in-out",  // Safari 3.2+, Chrome 
		    "-moz-transition": "-webkit-transform " + time + "s ease-in-out",  // Firefox 4-15 
		      "-o-transition": "-webkit-transform " + time + "s ease-in-out",  // Opera 10.5–12.00 
		         "transition": "-webkit-transform " + time + "s ease-in-out"  // Firefox 16+, Opera 12.50+ 
	 	});
	 }


	/*
	 * After images are loaded
	 */
	$(window).load(function(){
		// maximize and center image while maintaining image ratio
		maintainRatio();
		// scale and animate
		scale(1.5,10);
	})


	/*
	 * While window is being resize
	 */
	$(window).resize(function() {
		// maximize and center image while maintaining image ratio
		maintainRatio();
	});

});