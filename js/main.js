jQuery(function() {
    jQuery('.menu .menu__item a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var navHeight = jQuery('.navigation').height();
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - navHeight
                }, 1000);

                return false;
            }
        }
    });
});
// const header = document.querySelector('.navigation');
// window.addEventListener('scroll', () => {
//         const scrollPos = window.scrollY;
//         if (scrollPos > 80) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     })
jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop() > 80) {
            jQuery(".navigation").css("background-color", "#eef5ff");
        } else {
            jQuery(".navigation").css("background-color", "transparent");
        }
    });
});

jQuery(document).ready(function() {
    var widthOfImage = jQuery('.additional-top').width();
    var heightOfImage = jQuery('.additional-top').height();
    jQuery('.additional-right').width(widthOfImage).height(heightOfImage);
});

jQuery(window).resize(function() {
    var widthOfImage = jQuery('.additional-top').width();
    var heightOfImage = jQuery('.additional-top').height();
    jQuery('.additional-right').width(widthOfImage).height(heightOfImage);
});

jQuery(document).ready(function() {
    jQuery(".people-img").click(function() {
        var data_dot = jQuery(this).data('id');
        jQuery(".dots-people").removeClass('active');
        jQuery("#" + data_dot).addClass('active');

        jQuery(".people-img").removeClass('active').addClass('unactive');
        jQuery(this).addClass('active').removeClass('unactive');

        jQuery('.card-out-team-content').removeClass('active');
        var target = jQuery("#" + data_dot).data('value');
        jQuery("#" + target).addClass('active');
    });
});

jQuery(document).ready(function() {
    jQuery(".dots-people").click(function() {
        var data_dot = jQuery(this).attr('id');
        jQuery(".dots-people").removeClass('active');
        jQuery(".people-img").removeClass('active').addClass('unactive');
        jQuery(".people-img[data-id='" + data_dot + "']").addClass('active').removeClass('unactive');
        jQuery(this).addClass('active');

        jQuery('.card-out-team-content').removeClass('active');
        var target = jQuery(this).data('value');
        jQuery("#" + target).addClass('active');
    });
});

jQuery(function() {
    jQuery('.main-menu a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var navHeight = jQuery('.navbar').height();
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - navHeight
                }, 1000);
            }
        }
    });
    jQuery("#button-header-one").click(function() {
        jQuery('html,body').animate({
            scrollTop: jQuery(".easy-contect").offset().top
        }, 'slow');
    });
});

jQuery(document).ready(function() {
    jQuery('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        dotsEach: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false,
            },
            992: {
                items: 1,
                nav: false,
            }
        }
    });
})