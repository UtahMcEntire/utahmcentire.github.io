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

window.onload=function(){
	var cookie_pos=document.cookie.indexOf('sel_theme=');//locate value in cookie
	if(cookie_pos!=-1){//if string was found
		var cookie_flavor=substr(cookie_pos+10,document.cookie.indexOf(';',cookie_pos));//extract the value of the cookie
			/*then run your already existing change theme function using the extracted name*/
			setTheme(cookie_flavor);
	}
	else {
		setTheme('theme-light');
	}
}


/* Immediately invoked function to set the theme on initial load
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

var myInput1 = document.getElementById('Slider1');
var myInput2 = document.getElementById('Slider2');
var myInput3 = document.getElementById('Slide3');
var myInput4 = document.getElementById('Slide4');
var myInput5 = document.getElementById('Slide5');
var myInputCntnr = document.getElementById('my-input-cntnr');
myInputCntnr.onmousewheel = function(e) {
  console.log(e.deltaY);
  if(e.deltaY > 1) {
    myInput1.checked = "checked";
  } else if (e.deltaY < -1) {
    myInput2.checked = "checked";
  }
}
*/


/*
$(".nav").bind("mousewheel", function(event, delta) {
    if (this.checked == "checked") {
        this.checked = "unchecked";
    }
    else if (this.value == "Sperm") {
        this.value = "Orca";
    }
    else if (this.value == "Orca") {
        this.value = "Humpback";
    }
    else if (this.value == "Humpback") {
        this.value = "Blue";
    }
    return false;
 });*/