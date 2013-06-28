
function addJQuery(callback) {

  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");

  script.addEventListener('load', function() 
  	{
    	var script = document.createElement("script");
    	script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    	document.body.appendChild(script);
  	}, 

  false);

  document.body.appendChild(script);

}



function main() {
  // Note, jQ replaces $ to avoid conflicts.
  console.log("There are " + jQ('a').length + " links on this page.");
  
  /* extracting tracking number */
  var tr_num_str = jQ(".bigger")[0].innerText;
  var tr_num = tr_num_str.replace("Tracking Number: ", "");
  
  /*creating a query string qith the tracking number*/
  var req = "http://chart.apis.google.com/chart?cht=qr&chl=" + tr_num +"&chs=120x120";

  console.log (req);

  var ele = jQ(".bigger");
  ele.append("<div id = \"qr\"></div>");
  var img = jQ("<img />").attr('src', req);
  jQ("#qr").append(img);
}

// load jQuery and execute the main function
addJQuery(main);