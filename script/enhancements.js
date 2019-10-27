/*set the navigation tab or item highlighted if the stay on proper page*/
function navigation_highlight()
{
	var cur_page =document.querySelector("div[class='navbar']").querySelector("a[href='"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1)+"']");
	if(cur_page)
	{
		var cur_tab = cur_page.parentElement.parentElement;
		if(cur_tab.className == '')
		{
			cur_page.classList.add("current_tab");
		}
		else
		{
			cur_page.classList.add("current_page");
			cur_tab.classList.add("current_tab");
		}
	}
	
}

/*Display the popup after submission of form and submit*/
function form_submission()
{
	if (confirm("Are you sure all the information filled are correct?"))
	{
	  	alert("Success");
		document.getElementById('enquiry').submit();
	} 
	else
	{
		alert("Please refill the incorrect field part");
	}
}

// Next/previous controls button of the slideshow
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//Display the image of the slideshow
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}