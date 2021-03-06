/* back button */
function goBack() {
	window.history.back();
	}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
	document.cookie='sel_theme='+themeName+';';
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
	var cookie_pos=document.cookie.indexOf('sel_theme=');//locate value in cookie
	if(cookie_pos!=-1){//if string was found
		var cookie_flavor=substr(cookie_pos+10,document.cookie.indexOf(';',cookie_pos));//extract the value of the cookie
		//then run your already existing change theme function using the extracted name
		setTheme(cookie_flavor);
	}
	
	else {
		setTheme('theme-light');
	}
})();