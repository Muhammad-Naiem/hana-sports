(function ($) {
    $(function () {
    

    if ($('.main-img-slider').length) {    
        
        var sliders = {
            1: {
                slider: '#slider_1',
                nav: '#slider_nav_1'
            },
            2: {
                slider: '#slider_2',
                nav: '#slider_nav_2'
            },
            3: {
                slider: '#slider_3',
                nav: '#slider_nav_3'
            }
        };

        $.each(sliders, function () {

            $(this.slider).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 300,
                lazyLoad: 'ondemand',
                asNavFor: this.nav
            });
            $(this.nav).slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: '0px',
                arrows: false,
                asNavFor: this.slider,
                dots: false,
                centerMode: false,
                draggable: true,
                speed: 200,
                focusOnSelect: true,
            });

        });
        
 
        }

        $('.main-img-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            //remove all active class
            $('.thumb-nav .slick-slide').removeClass('slick-current');
            //set active class for current slide
            $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
        });
        
        if ($('.main-img-slider').length) {
            $('[data-fancybox^="gallery"]').fancybox({
                thumbs: {
                    autoStart: false
                }
            });
        }
        
        
        
        
        
    }) // End ready function.
})(jQuery)