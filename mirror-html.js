// Mirror the html of the site you are on to a new one.
// Obviously not the greatest copy, doesn't work very well
var s = open().document.documentElement.innerHTML = document.documentElement.innerHTML;
s.document.documentElement.outerHTML = document.documentElement.outerHTML;
