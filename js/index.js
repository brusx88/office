'use strict';

document.onclick=check;
function check(e) {
        var target = (e && e.target) || (event && event.srcElement);
        var obj = document.getElementById('hero__button');
        if(target!=obj){document.getElementById('pop-up').style.display='none'}
}

function showPopUp(){
		document.getElementById("pop-up").style.display="block";	   
}
function closeThis(){
    document.getElementById("pop-up").style.display="none";    
}
