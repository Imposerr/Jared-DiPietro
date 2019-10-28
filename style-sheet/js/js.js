
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $('.top-header').animate({'opacity':'1'},750);
    $('#text').animate({'opacity':'1'},750);
    var fade = false;
    var fade1 = false;
    $(window).scroll( function(){

        $('.javatest').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();
           
            console.log("Scroll Top: " + $(window).scrollTop());
            console.log("Top of Object: " + top_of_object*0.5);
            console.log("Bottom of Object: " +bottom_of_object*1.5);
            console.log("Bottom of Window: " +bottom_of_window);
            console.log("Opacity: "+$(this).css("opacity"));
            console.log("Fade: "+ fade);

            /* If the object is completely visible in the window, fade it it */
            if( (bottom_of_window) > (top_of_object*1.5) && (bottom_of_object*0.8) > (top_of_window) ){
                if( fade == false){
                    $(this).stop(true,true);
                    fade = true;
                }
                $(this).animate({'opacity':'1'},750);
                console.log("Fade in is true");
                    
            }
            
            // else if( (bottom_of_window) < (bottom_of_object*0.75) < (top_of_window)){
            else if( (bottom_of_window) < (top_of_object*1.5) || (bottom_of_object*0.8) < (top_of_window)){
                if (fade == true){
                    $(this).stop(true,true);
                    fade = false;
                }
                $(this).animate({'opacity':'0'},750);
                console.log("Fade out is true");

            }
            else {
                console.log("Fade is false");
            }
            

        });
    
        /* Check the location of each desired element */
        $('.flex-box-1').each( function(i){
            
            var bottom_of_object1 = $(this).position().top + $(this).outerHeight();
            var bottom_of_window1 = $(window).scrollTop() + $(window).height();
            var top_of_window1 = $(window).scrollTop();
           
            console.log("Scroll Top: " + $(window).scrollTop());
            console.log("Bottom of Object: " +bottom_of_object1);
            console.log("Bottom of Window: " +bottom_of_window1);
            console.log("Opacity: "+$(this).css("opacity"));
            console.log("Fade: "+ fade1);

            /* If the object is completely visible in the window, fade it it */
            if( (bottom_of_window1) > (bottom_of_object1) && (bottom_of_object1) > (top_of_window1) ){
                if( fade1 == false){
                    $(this).stop(true,true);
                    fade1 = true;
                }
                $(this).animate({'opacity':'1'},750);
                console.log("Fade in is true");
                    
            }
            
            else if( (bottom_of_window1) < (bottom_of_object1) < (top_of_window1)){
                if (fade1 == true){
                    $(this).stop(true,true);
                    fade1 = false;
                }
                $(this).animate({'opacity':'0'},750);
                console.log("Fade out is true");

            }

            
            else {
                console.log("Fade is false");
            }
            

        }); 
        
        
    });

        // $(window).scroll(function(){
    //     $(".flex-box").css("opacity", 1 - $(window).scrollTop() / 250);
    // });
});
