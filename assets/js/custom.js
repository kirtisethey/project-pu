jQuery(function() {
                 
    var clicked = 0;
    jQuery('.punav-btn').click(function(e){
     
        var screen_height = jQuery(window).height() - jQuery('.mob-header').height();
         
        jQuery(this).toggleClass('active');
        jQuery('body').toggleClass('punav-active');

         
        if (clicked == 0) {
            jQuery('.pu-nav-main').height(screen_height);
            clicked = 1;
            return;
        }
         
        if (clicked == 1) {
            jQuery('.pu-nav-main').removeAttr('style');
            clicked = 0;
            return;
        }

        jQuery('body').addClass('punav-active1');

         
    });
     
    
});


jQuery(document).ready(function() {

    jQuery('.punav-btn').click(function(e){


        jQuery('body').addClass('punav-active1');
        e.stopPropagation();


    });

	jQuery(".puslider-home").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
		autoplay: true,
		speed: 1000,
		//prevArrow: '<span class="prev"><i class="arrow-left" aria-hidden="true"></i></span>',
        //nextArrow: '<span class="next"><i class="arrow-right" aria-hidden="true"></i></span>',
	});
});