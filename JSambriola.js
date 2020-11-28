function scriviMessaggio (nodo, messaggio) {
    var nodoTesto = document.createTextNode(messaggio);
    nodo.replaceChild(nodoTesto, nodo.firstChild);
}   


function gestoreFoto () {
  try {
    scriviMessaggio(nodoMessaggioDidascalia, "Ciao! Mi chiamo Benedetta e sono una fotografa freelance.");
  
   } catch (e) {
     alert("gestoreFoto" + e)
   }
}


function gestoreBottone () {
  try {
    if(myDiv.style.display === "none") {
       myDiv.style.display ="none"; 
       
    } else {
       myDiv.style.display ="inline";
       blue.style.display ="";
       orange.style.display =""; 
       green.style.display ="";
    }

  } catch ( e ) {
     alert("gestoreBottone " + e)
   }
}

function gestoreBottone1 () { 
  try {
     if(blue.style.display === "none") {
       blue.style.display ="none"; 
    } else {
       blue.style.display ="inline";
       myDiv.style.display ="";
       orange.style.display =""; 
       green.style.display ="";
    }

  } catch ( e ) {
     alert("gestoreBottone " + e)
   }
}

function gestoreBottone2 () {
  try {
    if(orange.style.display === "none") {
      orange.style.display ="none"; 
    } else {
      orange.style.display ="inline";
       myDiv.style.display ="";
       blue.style.display =""; 
       green.style.display ="";
    }
  } catch ( e ) {
     alert("gestoreBottone " + e)
   }
}

function gestoreBottone3 () {
  try {
    if(green.style.display === "none") {
      green.style.display ="none"; 
    } else {
      green.style.display ="inline";
       myDiv.style.display ="";
       blue.style.display =""; 
       orange.style.display = "";
    }
  } catch ( e ) {
     alert("gestoreBottone " + e)
   }
}

function gestoreTurn () {
  document.body.style.backgroundColor = "black";
}

function gestoreReset () {
  try {
  document.body.style.backgroundColor = "snow";
} catch ( e ) {
  alert("gestoreReset " + e)
   }
}
var nodoMessaggioDidascalia;

function gestoreLoad () {
try {
  nodoMessaggioDidascalia = document.getElementById("messaggioDidascalia");
  var nodoTesto = document.createTextNode("");
  nodoMessaggioDidascalia.appendChild(nodoTesto);
  nodoFoto = document.getElementById("foto");
  nodoFoto.onclick = gestoreFoto;
  var myDiv = document.getElementById("myDiv");
  bottone.onclick = gestoreBottone;
  var blue = document.getElementById("blue");
  bottone1.onclick = gestoreBottone1;
  var orange = document.getElementById("orange");
  bottone2.onclick = gestoreBottone2;
  var green = document.getElementById("green");
  bottone3.onclick = gestoreBottone3;
  var turn = document.getElementById("turn");
  turn.onclick = gestoreTurn;
  var reset = document.getElementById("reset");
  reset.onclick = gestoreReset;


   } catch (e) {
  alert("gestoreLoad " + e )
}
}
window.onload = gestoreLoad;