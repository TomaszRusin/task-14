var templateCell = document.getElementById('template-carousel-cell').innerHTML;
var ul = document.getElementById('test');

Mustache.parse(templateCell);

for(var i = 0; i < placesData.length; i++){
  var places = Mustache.render(templateCell, placesData[i]);
  ul.insertAdjacentHTML(places);
}



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
  