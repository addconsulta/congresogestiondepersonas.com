function getURLvar(var_name){ 
	var re = new RegExp(var_name + "(?:=([^&]*))?", "i"); 
	var pm = re.exec(decodeURIComponent(location.search)); 
	if(pm === null) 
		return "/";   
	return pm[1] || ""; 
}
function utm(){
	var fm = getURLvar("m");
	var futm_source = getURLvar("utm_source");
	var futm_medium = getURLvar("utm_medium");
	var futm_content = getURLvar("utm_content");
	var futm_campaign = getURLvar("utm_campaign");
	//var url = "http://"+document.domain;
	// var newurl = "?m="+fm+"&utm_source="+futm_source+"&utm_medium="+futm_medium+"&utm_content="+futm_content+"&utm_campaign="+futm_campaign;
	if(futm_campaign=="" || futm_campaign=="/"){
	    var newurl = "";
	}else{
	    var newurl = "?m="+fm+"&utm_source="+futm_source+"&utm_medium="+futm_medium+"&utm_content="+futm_content+"&utm_campaign="+futm_campaign;
	}
	if(sessionStorage["newurl"]){
		lsurl = sessionStorage["newurl"];
	}else{
		sessionStorage["newurl"] = newurl;
		lsurl = sessionStorage["newurl"];
	}
	var myurl = $(this).attr("href");
	$(this).attr("href",myurl+lsurl);
	//window.location.replace(newurl);
}
$(".utm").on("click",utm);