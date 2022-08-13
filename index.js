var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage1="images/" + "dice" + randomnumber1 +".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdiceimage1);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="images/"+ "dice" + randomnumber2 + ".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdiceimage2);


if(randomdiceimage1>randomdiceimage2){
    document.querySelector("h1").innerHTML="🚩 Player1 wins";
}
else if(randomdiceimage2>randomdiceimage1){
    document.querySelector("h1").innerHTML="🚩 Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}




