 function hideStuff(){

 	// for every element
	// get innerHTML
	// replace innerHTML with replaced version of html
	
	// random keywords to be changed
	var myobject = {
        "Hunger Games" : ["an", "array", "of", "words"]
        };
        
        var keywords =  myobject["Hunger Games"];

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
	  	
	  // Now snap tag will be put around the substrings from index 'startIndex' to 'endIndex'	

  }
}
