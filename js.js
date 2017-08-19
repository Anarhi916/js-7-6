

$('.text').hide();
$('img').on('mouseover', bobik);
function bobik(){
  $('.text').animate({width: 'show', opacity: 'show'}, 'slow');
}
$('img').on('mouseleave', bobikZdoh);
function bobikZdoh(){
  $('.text').animate({width: 'hide', opacity: 'hide'}, 2000);
}
