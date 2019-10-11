function myFunction()
{
	var myProduct = new Array("Baby's Hulk Costume", "Girl's Gamora Costume", "Boy's Iron Man Costume",
							  "Woman's Black Widow Costume","Man's Thanos Costume","Baby's Yoda Costume",
							  "Girl's Princess Leia Costume","Boy's Jedi Costume","Man's Darth Vader Costume",
							  "Woman's Rey Costume","Baby's kevin Minion Costume","Woman's Minion Costume",
							  "Boy's Dracula Minion Costume","Man's Jerry Minion Costume",
							  "Girl's Fun Minion Costume");
	// Get dropdown element from DOM
	var Pro_dropdown = document.getElementById("product");
	console.log(Pro_dropdown);
	// Loop through the array
	for (var i = 0; i < myProduct.length; ++i) {
		// Append the element to the end of Array list
		Pro_dropdown[Pro_dropdown.length] = new Option(myProduct[i], myProduct[i]);
	}
	
	
	
	
	var myState = new Array("Johor Bahru","Kedah","Kelantan","Malacca","Negeri Sembilan",
							"Pahang","Penang","Perak","Perlis","Sabah","Sarawak","Selangor","Terengganu",
							"Kuala Lumpur","Labuan","Putrajaya");
	// Get dropdown element from DOM
	var S_dropdown = document.getElementById("state");
	console.log(S_dropdown);
	// Loop through the array
	for (var i = 0; i < myState.length; ++i) {
		// Append the element to the end of Array list
		S_dropdown[S_dropdown.length] = new Option(myState[i], myState[i]);
	}
}

function validateFunc(){
	var str="";
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("eaddress").value;
	var phone = document.getElementById("pnum").value;
	var addr = document.getElementById("saddress").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var postcode = document.getElementById("postcode").value;
	var rental = document.getElementById("rentdura").value;
	var comment = document.getElementById("comment").value;
	/*First & Last Name*/
	var letters = /^[A-Za-z]+$/;
	
	/*Email*/
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
	
	/*phone*/
	var phoneno = /^\d{1,10}$/;
	
	if (!fname.match(letters) || fname.length > 25)
	{
		str += "Invalid Input of First Name \n";
		document.getElementById("fname").style.borderColor = "red";
	}
	if (!lname.match(letters) || lname.length > 25)
	{
		str += "Invalid Input of Last Name \n";
		document.getElementById("lname").style.borderColor = "red";
	}
	if (atpos < 1 || ( dotpos - atpos < 2 ))
	{
        str += "Invalid Input of Email \n";
		document.getElementById("eaddress").style.borderColor = "red";
    }
	if (!phone.match(phoneno))
	{
		str += "Invalid Input of Phone Number \n";
		document.getElementById("pnum").style.borderColor = "red";
	}
	if (addr.length > 40 || addr=="")
	{
		str += "Invalid Input of Address \n";
		document.getElementById("saddress").style.borderColor = "red";
	}
	if (city.length > 20 || city=="")
	{
		str += "Invalid Input of City/Town \n";
		document.getElementById("city").style.borderColor = "red";
	}
	if(isNaN(postcode) || postcode.length > 5 || postcode.length < 5)
	{
		str += "Invalid Input of Postcode \n";
		document.getElementById("postcode").style.borderColor = "red";
	}
	if (isNaN(rental) || rental <= 0)
	{
		str += "Invalid Input of Rental";
		document.getElementById("rentdura").style.borderColor = "red";
	}
	if(str!="")
	{
		alert(str);
	}
	else
	{
		alert("Success");
	}
}
function getSelectedValue(){
	//Get Value from dropdown element
	var selectedItem = document.getElementById("product").value;
	//console.log(selectedItem);
	document.getElementById("subject").text = selectedItem；
	}
}
