

var templateCell = document.getElementById('template-carousel-cell').innerHTML;

var placesList = '';

for(var i = 0; i < placesData.length; i++){
  placesList += Mustache.render(templateCell, placesData[i]);
}

document.getElementById('target').insertAdjacentHTML('beforeend', placesList);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


var buttonRestart = document.querySelector('.button-restart');

buttonRestart.addEventListener( 'click', function( event ) {
    // filter for button clicks
    flkty.select(0);
  });

  var infos = document.getElementById('infos');

  var allMarkers = [];

  var allCoords = [];

  window.initMap = function(){
    for(var i=0; i<placesData.length; i++){
      allCoords.push(placesData[i].coords);
    }

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: allCoords[0]});

    for(var p = 0; p < allCoords.length; p++){
 
      allMarkers[p] = new google.maps.Marker({
        position: allCoords[p],
        map: map
      });
      allMarkers[p].addListener('click', clickedMarker);	
      
      var clickedMarker = function(){
        infos.innerHTML = 'You clicked marker ';// zupełny brak pojęcia jak zrobić żeby markery były np 1-3
      };
    } 
  };
  