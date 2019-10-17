/*set the navigation tab or item highlighted if the stay on proper page*/
function navigation_highlight()
{
	var cur_page =document.querySelector("div[class='navbar']").querySelector("a[href='"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1)+"']");
	if(cur_page)
	{
		var cur_tab = cur_page.parentElement.parentElement;
		if(cur_tab.className == null)
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
	alert("Success");
	document.getElementById('enquiry').submit();
}
