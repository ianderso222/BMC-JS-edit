
$(document).ready(function() {
  var images = $(".item") //contain all unfiltered images
  $(".button").on("click", function(){
  	$.each(images, function(i, l){
  		$(l).hide();
  	}); //hide all images
  	searchValue = $("#filter").val(); //get entered value of input field
    searchValueRE = new RegExp(searchValue, "i"); //convert search value into RegExp
    output = $.grep(images, function (n) {
        return searchValueRE.test(n.className);


    }); //Returns array that matches input value
    $.each(output, function(i, l){
  		$(l).show('');
  	}); //show matched images


  });

  $('form').keypress(function(e){
      var code = e.keyCode || e.which;

      if( code === 13 ) {
          e.preventDefault();
          $( ".button" ).click();
      };
  });

  $("#img_Favorite").on("click", function(){

      
  });


});
