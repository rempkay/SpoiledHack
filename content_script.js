 function hideStuff(){

 	// for every element
	// get innerHTML
	// replace innerHTML with replaced version of html
	
        var keywords = ["an", "array", "of", "words"];

 	var body = document.querySelector("<body>");
 	var bodyHTML = body.innerHTML;


	// iterate over all 'keyword's in array, and do this to them:

	for(var i=0; i<keywords.length;i++){
		var regularExpression = keywords[i];
		var index = bodyHTML.search(regularExpression);
		if(index != -1){
		  var startIndex = index;
		  var endIndex = index+regularExpression.length;
	  	}

  }
}
