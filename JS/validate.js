function checkName(event){
  name = document.getElementById("yourName").value;
	
  if(/^[a-zA-Z]+$/.test(name)){
    text = "Wow " + name + " is a great name! Good job!";	
    var f = document.getElementById("myForm");
    f.parentNode.removeChild(f);
	
    }else{
      text = "You have to have a name and it can only have letters (sorry yours is invalid)."
    }
	
  document.getElementById("display").innerHTML = text;
	
}
