$(window).on('load',function(){
    $('#loding-wrap').delay(3000).fadeOut('fast');
    $('#load-wrap').delay(3000).fadeOut('fast');
});

// drop

$(document).ready(function(){
    $("#setting").click(function(){
        $("#colors-id").slideToggle("fast");
    });

    $('.color').click(function(){

        let name = $(this).attr('id');

        $('#colortheme').attr('href','css/' + name + '.css');
    });
});

