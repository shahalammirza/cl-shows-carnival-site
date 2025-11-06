(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
    });

    $(document).ready(function () {
        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

    });


    //10. Client Slider Initialize
        function client_carouselInit() {
            $('.owl-carousel.hero_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5500,
                autoplayHoverPause: true,
                nav: true,
                dots: true,
                navText: ["<img src='images/site/template/arrow1.png'>","<img src='images/site/template/arrow2.png'>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 1
                    },
                    575:{
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            });
        }
        client_carouselInit();


    //10. Client Slider Initialize
        function client_carouselInitpro() {
            $('.owl-carousel.product_slider').owlCarousel({
                loop: true,
                margin: 12,
                items: 5,
                autoplay: true,
                autoplayTimeout: 5500,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                navText: ["<img src='images/site/template/arrow1.png'>","<img src='images/site/template/arrow2.png'>"],
                responsive: {
                    0: {
                        items: 3
                    },
                    390: {
                        items: 3
                    },
                    575:{
                        items: 5
                    },
                    768: {
                        items: 5
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }
        client_carouselInitpro();

})(jQuery);