

function interceptClickEvent(e) 
{
    var href;
    var target = e.target || e.srcElement;
    
    if (target.tagName === 'A') 
    {
        href = target.getAttribute('href');


        if ( !href.includes('http') ) 
        {
   	 		href = 'http://' + window.location.hostname + href;
		}

        window.location = 'http://www.bovered.co.uk/dontbreaklinks/?redirect=' + href;

        if (true) 
        {
           e.preventDefault();
        }
    }
}


function changeLinks()
{


	if (document.addEventListener) 
	{
	    document.addEventListener('click', interceptClickEvent);
	} 
	else if (document.attachEvent) 
	{
	    document.attachEvent('onclick', interceptClickEvent);
	}

}



changeLinks();
window.onload = changeLinks;

