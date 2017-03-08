$(document).ready(function(){

    // Initial loading likes for images
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
    })
});
