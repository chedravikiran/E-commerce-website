let menuItems = document.getElementById("menu");
let menuBtn = document.getElementsByClassName('menu-icon')[0]; // assuming you want the first menu icon

menuItems.style.maxHeight = "0px"; 



function menutoggle() {
  

  if (menuItems.style.maxHeight === "0px") {
    menuItems.style.maxHeight = "200px";
    
  } else {
    menuItems.style.maxHeight = "0px"; // 
  }
}

// Add event listener to the menu button
menuBtn.addEventListener('click', menutoggle);





let productImg = document.getElementById('ProductImg');
let smallImgs = document.getElementsByClassName('small-img');


// Loop through all small images and add a click event listener to each one
for (let i = 0; i < smallImgs.length; i++) {
  smallImgs[i].onclick = function() {
    productImg.src = smallImgs[i].src;
  };
}




let loginForm=document.getElementById('login-form');

let regForm=document.getElementById('Reg-form');
let indicator=document.getElementById('indicator');



function register(){
  regForm.style.transform= 'translateX(0px)';

loginForm.style.transform= 'translateX(0px)';
indicator.style.transform='translateX(100px)';
}


function login(){
  regForm.style.transform= 'translateX(300px)';

loginForm.style.transform= 'translateX(300px)';
indicator.style.transform='translateX(100px)';
}
