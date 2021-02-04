$(document).ready(function(){
    $(".content").not(':first-of-type').hide();
    $("li").each(function(i){
        $(this).attr('data-tab', 'tab'+i);
    });

    $(".content").each(function(i){
        $(this).attr('data-tab', 'tab'+i);
    });

    $('<div class="line"></div>').appendTo($("li"));
    
    $("li").click(function(){
        var dataTab = $(this).data('tab');

        $('.container').find("li").removeClass('active');
        $(this).addClass('active');

        $('.container').find('.line').width(0);
        $(this).find(".line").animate({width: '100%'}, '2000');
        $(".container").find(".content").hide();
        $(".container").find(".content").filter('[data-tab='+dataTab+']').show(); 
    });
});
