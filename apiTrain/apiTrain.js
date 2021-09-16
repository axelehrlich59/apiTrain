//Response treatment

const callBackGetSuccess = function(data) {

  // On déclare une constante qui va cibler l'élement d'affichage
  const element = document.getElementById("zone_meteo");
  // On affiche la réponse de l'api dans notre variable element, la température 
  // se trouve dans l'objet data de la branche main.temp
  element.innerHTML = "La temperature est de " + data.main.temp;
}

 // Fonction d'appel d'API via un onclick button

function buttonClickGET() {

  const btn = document.getElementById("inputData").value
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+btn+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

  $.get(url, callBackGetSuccess).done(function() {
      //alert( "second success" );
    })
    .fail(function() {
      let error = document.getElementById('errorCard');
      if (error.style.display == "none") {
        error.style.display == "flex"
      }
    })
    .always(function() {
      //alert( "finished" );
    });

    
}
