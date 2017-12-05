$(document).foundation()
var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var popup = document.getElementById("popup");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  counter.innerHTML = y + "px";

  if(y < 100){

    popup.style.transition = "1s";
    popup.style.opacity = "1";
      popup.style.display = "inline";

  }else{

    popup.style.transition = "1s";
    popup.style.opacity = "0";
 }

 if(y < 1300){

   popup2.style.transition = "1s";
   popup2.style.opacity = "1";
     popup2.style.display = "inline";

 }else{

   popup2.style.transition = "1s";
   popup2.style.opacity = "0";
}

if(y < 2300){

  popup3.style.transition = "1s";
  popup3.style.opacity = "1";
    popup3.style.display = "inline";

}else{

  popup3.style.transition = "1s";
  popup3.style.opacity = "0";
}

if(y < 4300){

  popup5.style.transition = "1s";
  popup5.style.opacity = "1";
    popup5.style.display = "inline";

}else{

  popup5.style.transition = "1s";
  popup5.style.opacity = "0";
}

if(y < 5300){

  popup6.style.transition = "1s";
  popup6.style.opacity = "1";
    popup6.style.display = "inline";

}else{

  popup6.style.transition = "1s";
  popup6.style.opacity = "0";
}

if(y < 6300){

  popup7.style.transition = "1s";
  popup7.style.opacity = "1";
    popup7.style.display = "inline";

}else{

  popup7.style.transition = "1s";
  popup7.style.opacity = "0";
}

if(y < 7300){

 popup8.style.transition = "1s";
 popup8.style.opacity = "1";
   popup8.style.display = "inline";

}else{

 popup8.style.transition = "1s";
 popup8.style.opacity = "0";
}

if(y < 8300){

popup9.style.transition = "1s";
popup9.style.opacity = "1";
  popup9.style.display = "inline";

}else{

popup9.style.transition = "1s";
popup9.style.opacity = "0";
}

if(y < 9300){

popup10.style.transition = "1s";
popup10.style.opacity = "1";
  popup10.style.display = "inline";

}else{

popup10.style.transition = "1s";
popup10.style.opacity = "0";
}


};
