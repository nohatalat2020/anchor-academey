/*global , console , alert*/
// scroll to top

var myButton=document.getElementById('go-up');

window.onscroll=function(){
    "use strict";
	
    if(window.pageYOffset >=200){
		
        myButton.style.display='block';
		
    }else{
        myButton.style.display='none';

    }
};

myButton.onclick=function(){
    "use strict";
    window.scroll(0,0);
};


//end task

//loading screen

