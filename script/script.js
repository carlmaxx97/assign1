function rent_duration()
{
	if (typeof(Storage) !== "undefined") {
	  // Store
	  localStorage.setItem("rent_duration", document.getElementById("duration").value);
	}
	else {
		alert('not ok');
	}
	return localStorage.getItem("rent_duration");
}

function rent(product, duration)
{
	if (typeof(Storage) !== "undefined") {
	  // Store
	  localStorage.setItem("product", product);
	}
	else {
		alert('not ok');
	}
	window.location.href = "enquiry.html";
}

function preload_enquiry()
{
	var product = localStorage.getItem("product");
	var duration = localStorage.getItem("rent_duration");
	localStorage.removeItem('product');
	localStorage.removeItem('rent_duration');
	localStorage.clear()
	
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
	
	getSelectedValue(myProduct[product], product, duration);
	//alert(myProduct[product] + product + duration);
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
	else
	{
		document.getElementById("fname").style.borderColor = "green";
	}
	if (!lname.match(letters) || lname.length > 25)
	{
		str += "Invalid Input of Last Name \n";
		document.getElementById("lname").style.borderColor = "red";
	}
	else
	{
		document.getElementById("lname").style.borderColor = "green";
	}
	if (atpos < 1 || ( dotpos - atpos < 2 ))
	{
        str += "Invalid Input of Email \n";
		document.getElementById("eaddress").style.borderColor = "red";
    }
	else
	{
		document.getElementById("eaddress").style.borderColor = "green";
	}
	if (!phone.match(phoneno))
	{
		str += "Invalid Input of Phone Number \n";
		document.getElementById("pnum").style.borderColor = "red";
	}
	else
	{
		document.getElementById("pnum").style.borderColor = "green";
	}
	if (addr.length > 40 || addr=="")
	{
		str += "Invalid Input of Address \n";
		document.getElementById("saddress").style.borderColor = "red";
	}
	else
	{
		document.getElementById("saddress").style.borderColor = "green";
	}
	if (city.length > 20 || city=="")
	{
		str += "Invalid Input of City/Town \n";
		document.getElementById("city").style.borderColor = "red";
	}
	else
	{
		document.getElementById("city").style.borderColor = "green";
	}
	if(isNaN(postcode) || postcode.length > 5 || postcode.length < 5)
	{
		str += "Invalid Input of Postcode \n";
		document.getElementById("postcode").style.borderColor = "red";
	}
	else
	{
		document.getElementById("postcode").style.borderColor = "green";
	}
	if (isNaN(rental) || rental <= 0)
	{
		str += "Invalid Input of Rental";
		document.getElementById("rentdura").style.borderColor = "red";
	}
	else
	{
		document.getElementById("rentdura").style.borderColor = "green";
	}
	if(str!="")
	{
		alert(str);
	}
	else
	{
		alert("Success");
		document.getElementById('enquiry').submit();
	}
}
function getSelectedValue(product_desc = null, product = null, duration = null)
{
	//Get Value from dropdown element
	if(product_desc == null) var selectedItem = document.getElementById("product").value;
	else var selectedItem = product_desc;
	console.log(selectedItem);

	//Put the value get from dropdown element into the textbox
	if(product_desc != null)
	{
		document.getElementById("rentdura").value = duration;
		document.getElementById("product").selectedIndex = parseInt(product)+1;
		var inputtext = document.getElementById("subject");
		inputtext.value = "Enquiry on " +selectedItem;
	}

}
