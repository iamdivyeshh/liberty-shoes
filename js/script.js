
// --------Js Toggle form--------


let LoginForm = document.getElementById("LoginForm")
let RegForm = document.getElementById("RegForm")
let Indecator = document.getElementById("Indicator")

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)"
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)"

}




let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
    function menutoggle(){
        if(menuItems.style.maxHeight == "0px");
            {
                menuItems.style.maxHeight = "200px";
            }
        elseif
            {
            menuItems.style.maxHeight = "0px"
            }
        };


let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}


