function newjsfunc(){
	alert("Hello World");
}
function validatejsfunc(){
	
	//var rt = /a+b/;
	var password = document.getElementById('validate').value;
	if (password != "abcd123") {alert("wrong format");}
}
function confirmedpasswordjsfunc(){
	var cpassword = document.getElementById('confirm').value;
	if (cpassword!= "abcd123") {alert("wrong format");}
	if (cpassword!=password) {alert("password does not match");}
}