$( document ).ready(function() {
  var paragraphs = $( 'p' );
  $( 'p' ).on( "mouseover", function() {
    $( this ).css({
      "background-color": "blue",
      "color": "orange",
      "font-weight": "bold"
    });
});
