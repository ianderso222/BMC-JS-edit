$(document).ready(function() {
    //like function///////////////////////////////////////////////////////////////////////////////
    $.ajax({
        type: 'GET',
        url: 'likeCounter.php?getAllLikes',
        success: function (data) {
            $.each(data.images, function(index, value){
                $('.likeLink[data-imageid="'+ value.imageId +'"]').find('.likes').html(value.likes);
            });
        }
    });

    // Set a like for an image
    $('.likeLink').one('click', function(){
    
        var imageId = $(this).attr('data-imageid');

        $.ajax({
            type: 'POST',
            url: 'likeCounter.php',
            data: { imageId: imageId },
            success: function (data) {
                $('.likeLink[data-imageid="'+ data.imageId +'"]').find('.likes').html(data.likes);
            }
        });
    });



    //search Function/////////////////////////////////////////////////////////////////////////////
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
  		$(l).show();
  	}); //show matched images

  });



  $('form').keypress(function(e){ //adds enter key function
      var code = e.keyCode || e.which;

      if( code === 13 ) {
          e.preventDefault();
          $( ".button" ).click();
      };
  });

$('a#popular-scroll, #feature-scroll, #menu-item-142, #menu-item-144').on('click', function(){
    $("form#live-search").trigger('reset');
});


//sort function/////////////////////////////////////////////////////////////////////////
 var $divs = $(".item");
 $('a#popular-scroll').on('click', function () {
     var numericallyOrderedDivs = $divs.sort(function (a, b) {
         return $(a).find(".likes").text() < $(b).find(".likes").text();
     });
     $("#galleryWrap").html(numericallyOrderedDivs);
     $.each(images, function(i, l){
   		$(l).show();
   	});


     $.ajax({
         type: 'GET',
         url: 'likeCounter.php?getAllLikes',
         success: function (data) {
             $.each(data.images, function(index, value){
                 $('.likeLink[data-imageid="'+ value.imageId +'"]').find('.likes').html(value.likes);
             });
         }
     });

     // Set a like for an image
     $('.likeLink').one('click', function(){

         var imageId = $(this).attr('data-imageid');

         $.ajax({
             type: 'POST',
             url: 'likeCounter.php',
             data: { imageId: imageId },
             success: function (data) {
                 $('.likeLink[data-imageid="'+ data.imageId +'"]').find('.likes').html(data.likes);
             }
         });
     });

 });

        $("#menu-item-142").on("click", function(){
                 $("#aboutContent").show();
                 $(".title-content, #galleryWrap").hide();
             });


        $(".button, a#popular-scroll, #feature-scroll").on("click", function(){
             $("#galleryWrap, .title-content").show()
             $("#aboutContent").hide();;

         });



});
