/* =====================================
All JavaScript fuctions Start
======================================*/
(function($) {

    'use strict';
    /*--------------------------------------------------------------------------------------------
    	document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
    function lightbox_popup() {
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery: true,
            thumb_attr: 'data-lcl-thumb',

            skin: 'minimal',
            radius: 0,
            padding: 0,
            border_w: 0,
        });
    }


    // > Video responsive function by = custom.js ========================= //	
    function video_responsive() {
        jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
        jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    }

    // > Top cart list Show Hide function by = custom.js =================== //	
    function cart_block() {
        jQuery('.cart-btn').on('click', function() {
            jQuery(".cart-dropdown-item-wraper").slideToggle("slow");
        });
    }

    // > magnificPopup function	by = magnific-popup.js =========================== //
    function magnific_popup() {
        jQuery('.mfp-gallery').magnificPopup({
            delegate: '.mfp-link',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            }
        });
    }

    // > magnificPopup for video function	by = magnific-popup.js ===================== //	
    function magnific_video() {
        jQuery('.mfp-video').magnificPopup({
            type: 'iframe',
        });
    }

    // Vertically center Bootstrap modal popup function by = custom.js ==============//
    function popup_vertical_center() {
        jQuery(function() {
            function reposition() {
                var modal = jQuery(this),
                    dialog = modal.find('.modal-dialog');
                modal.css('display', 'block');

                // Dividing by two centers the modal exactly, but dividing by three 
                // or four works better for larger screens.
                dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
            }
            // Reposition when a modal is shown
            jQuery('.modal').on('show.bs.modal', reposition);
            // Reposition when the window is resized
            jQuery(window).on('resize', function() {
                jQuery('.modal:visible').each(reposition);
            });
        });
    }

    // > Main menu sticky on top  when scroll down function by = custom.js ========== //		
    function sticky_header() {
        if (jQuery('.sticky-header').length) {
            var sticky = new Waypoint.Sticky({
                element: jQuery('.sticky-header')
            });
        }
    }


    // > Sidebar sticky  when scroll down function by = custom.js ========== //		
    function sticky_sidebar() {
        $('.rightSidebar')
            .theiaStickySidebar({
                additionalMarginTop: 100
            });
    }


    // > page scroll top on button click function by = custom.js ===================== //	
    function scroll_top() {
        jQuery("button.scroltop").on('click', function() {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        jQuery(window).on("scroll", function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll > 900) {
                jQuery("button.scroltop").fadeIn(1000);
            } else {
                jQuery("button.scroltop").fadeOut(1000);
            }
        });
    }

    // > input type file function by = custom.js ========================== //	 	 
    function input_type_file_form() {
        jQuery(document).on('change', '.btn-file :file', function() {
            var input = jQuery(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
            var input = jQuery(this).parents('.input-group').find(':text'),
                log = numFiles > 10 ? numFiles + ' files selected' : label;
            if (input.length) {
                input.val(log);
            } else {
                if (log) alert(log);
            }
        });
    }

    // > input Placeholder in IE9 function by = custom.js ======================== //	
    function placeholderSupport() {
        /* input placeholder for ie9 & ie8 & ie7 */
        jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
        /* input placeholder for ie9 & ie8 & ie7 end*/
        /*fix for IE7 and IE8  */
        if (!jQuery.support.placeholder) {
            jQuery("[placeholder]").on('focus', function() {
                if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
            }).blur(function() {
                if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
            }).blur();

            jQuery("[placeholder]").parents("form").on('submit', function() {
                jQuery(this).find('[placeholder]').each(function() {
                    if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
                        jQuery(this).val("");
                    }
                });
            });
        }
        /*fix for IE7 and IE8 end */
    }


    // > footer fixed on bottom function by = custom.js ======================== //	
    function footer_fixed() {
        jQuery('.site-footer').css('display', 'block');
        jQuery('.site-footer').css('height', 'auto');
        var footerHeight = jQuery('.site-footer').outerHeight();
        jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
        jQuery('.site-footer').css('height', footerHeight);
    }


    // > accordion active calss function by = custom.js ========================= //	
    function accordion_active() {
        $('.acod-head a').on('click', function() {
            $('.acod-head').removeClass('acc-actives');
            $(this).parents('.acod-head').addClass('acc-actives');
            $('.acod-title').removeClass('acc-actives'); //just to make a visual sense
            $(this).parent().addClass('acc-actives'); //just to make a visual sense
            ($(this).parents('.acod-head').attr('class'));
        });
    }

    // > My Account Nav submenu show hide on mobile by = custom.js
    function Submenu_toogle_adminnav() {
        jQuery(".sub-menu").parent('li').addClass('has-child');
        jQuery(".mega-menu").parent('li').addClass('has-child');
        jQuery("<div class='fa fa-angle-right open-close-admin-btn'></div>").insertAfter(".admin-nav .has-child > a");
        jQuery('.has-child a+.open-close-admin-btn').on('click', function(ev) {
            jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function() {
                jQuery(this).parent().toggleClass('nav-active');
            });
            ev.stopPropagation();
        });
    }

    // > Nav submenu show hide on mobile by = custom.js
    //  function mobile_nav(){
    // 	jQuery(".sub-menu").parent('li').addClass('has-child');
    // 	jQuery(".mega-menu").parent('li').addClass('has-child');
    // 	jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");
    // 	jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
    // 		jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
    // 			jQuery(this).parent().toggleClass('nav-active');
    // 		});
    // 		ev.stopPropagation();
    // 	});
    //  }



    // > Nav submenu show hide on mobile by = custom.js
    function mobile_nav_2() {
        jQuery(".sub-menu").parent('li').addClass('has-child');
        jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

        jQuery('.has-child a+.submenu-toogle').on('click', function(ev) {

            jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function() {
                jQuery(this).parent().removeClass('nav-active');
            });

            jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function() {
                jQuery(this).parent().toggleClass('nav-active');
            });

            ev.stopPropagation();
        });

    }

    // Mobile side drawer function by = custom.js
    function mobile_side_drawer() {
        jQuery('#mobile-side-drawer').on('click', function() {
            jQuery('.mobile-sider-drawer-menu').toggleClass('active');
        });
    }

    //  > Top Search bar Show Hide function by = custom.js =================== //	

    function site_search() {

        jQuery(".header-search-icon").on('click', function() {
            jQuery("#search-toggle-block").slideToggle("slow");
            jQuery('.header-search-icon').toggleClass('close');
        });

    }

    //  > Top Search bar Show Hide function by = custom.js =================== //	

    function site_search2() {

        jQuery('a[href="#search-two"]').on('click', function(event) {
            jQuery('#search-two').addClass('open');
            jQuery('#search-two > form > input[type="search"]').focus();
        });

        jQuery('#search-two, #search-two button.close').on('click keyup', function(event) {
            if (event.target === this || event.target.className === 'close') {
                jQuery(this).removeClass('open');
            }
        });
    }

    //  > Top Search bar Show Hide function by = custom.js =================== //	

    function search_13() {

        jQuery('a[href="#search13"]').on('click', function(event) {
            jQuery('#search13').addClass('open');
            jQuery('#search13 > form > input[type="search"]').focus();
        });

        jQuery('#search13, #search13 button.close').on('click keyup', function(event) {
            if (event.target === this || event.target.className === 'close') {
                jQuery(this).removeClass('open');
            }
        });
    }


    // Home page Services function by = owl.carousel.js ========================== //
    function services_slider() {
        jQuery('.services-slider').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 10,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1366: {
                    items: 2,
                },
                1400: {
                    items: 3
                }
            }
        });
    }

    // Home page how-we-work function by = owl.carousel.js ========================== //
    function how_we_work() {
        jQuery('.how-we-work').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 10,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1366: {
                    items: 4,
                },
                1400: {
                    items: 4
                }
            }
        });
    }


    // Home page Project Slider function by = owl.carousel.js ========================== //
    function project_1_slider() {
        jQuery('.project-1-slider').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                1400: {
                    items: 1
                }
            }
        });
    }

    // featured products Slider function by = owl.carousel.js ========================== //
    function featured_products() {
        jQuery('.featured-products').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1024: {
                    items: 3,
                }
            }
        });
    }



    // Home page Project gallery 1 function by = owl.carousel.js ========================== //
    function project_gallery_one() {
        jQuery('.project-gallery-one').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 0,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1366: {
                    items: 3,
                },

            }
        });
    }


    // > work carousel  function by = owl.carousel.js ========================== //
    function projects_carousel2() {
        jQuery('.projects-carousel-two').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 15,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },

                1024: {
                    items: 3
                },

                1280: {
                    items: 4
                },

                1366: {
                    items: 5
                }

            }
        });
    }


    // > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 

    function input_number_vertical_form() {
        jQuery("input[name='demo_vertical2']").TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'fa fa-plus',
            verticaldownclass: 'fa fa-minus'
        });
    }

    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_1_content() {
        jQuery('.testimonial-1-content').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                1400: {
                    items: 1
                }
            }
        });
    }

    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_2_content() {
        jQuery('.testimonial-2-content').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {

                0: {
                    items: 1,
                },
                1400: {
                    items: 1
                }
            }
        });
    }

    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_3_content() {
        jQuery('.testimonial-3-content').owlCarousel({
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                991: {
                    items: 1,
                },
                1400: {
                    items: 2
                }
            }
        });
    }


    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_13_content() {
        jQuery('.testimonial-13-content').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            responsive: {

                0: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        });
    }
    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_4_content() {
        jQuery('.testimonial-4-content').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                1400: {
                    items: 1
                }
            }
        });
    }


    // > Testimonial carousel  function by = owl.carousel.js ========================== //
    function testimonial_5_content() {
        jQuery('.testimonial-carousel-5').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }

            }
        });
    }

    // Gallery slider function by = owl.carousel.js ========================== //
    function gallery_slider() {
        jQuery('.gallery-slider').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1024: {
                    items: 3,
                },

                1200: {
                    items: 4,
                },
                1366: {
                    items: 4,
                },
                1400: {
                    items: 5
                }
            }
        });
    }


    // Gallery slider function by = owl.carousel.js ========================== //
    function gallery_slider2() {
        jQuery('.gallery-slider2').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1024: {
                    items: 3,
                }
            }
        });
    }


    // Project slider function by = owl.carousel.js ========================== //
    function project_detail_slider() {
        jQuery('.project-detail-slider').owlCarousel({
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                }
            }
        });
    }



    //  home_client_carouse function by = owl.carousel.js ========================== //
    function home_client_carousel_2() {
        jQuery('.home-client-carousel-2').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 4
                }
            }
        });
    }


    // > Home_project_slider Full Screen with no margin function by = owl.carousel.js ========================== //
    function home3_projects_slider() {

        var owl = jQuery('.h3-project-slider').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                580: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1152: {
                    items: 3
                },
                1360: {
                    items: 3
                },
                1366: {
                    items: 3
                }
            }
        })
    }


    // > services-style-new carousel function by = owl.carousel.js ========================== //
    function services_style_new() {

        var owl = jQuery('.services-style-new').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1366: {
                    items: 2,
                },
                1400: {
                    items: 3
                }
            }
        })
    }



    // > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
    function home_projects_filter() {

        var owl = jQuery('.owl-carousel-filter').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                580: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1152: {
                    items: 4
                },
                1360: {
                    items: 4
                },
                1366: {
                    items: 5
                }
            }
        })

        /* Filter Nav */

        jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
            var filter_data = jQuery(this).data('filter');

            /* return if current */
            if (jQuery(this).hasClass('btn-active')) return;

            /* active current */
            jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) {
                jQuery(_owl).find('.item').each(owlAnimateFilter);
            });
        })



    }

    //  Service Gallery Carousel two function by = owl.carousel.js ========================== //
    function services_gallery_carousel_two() {
        jQuery('.services-gallery-two').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1000: {
                    items: 2
                }
            }
        });
    }




    //  Service Gallery Carousel twelve function by = owl.carousel.js ========================== //
    function service_button_filter() {

        var owl = jQuery('.service_button_filter').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                580: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1152: {
                    items: 4
                },
                1360: {
                    items: 4
                },
                1366: {
                    items: 4
                }
            }
        })

        /* Filter Nav */

        jQuery('.sr-btn-filter-wrap').on('click', '.sr-btn-filter', function(e) {
            var filter_data = jQuery(this).data('filter');

            /* return if current */
            if (jQuery(this).hasClass('btn-active')) return;

            /* active current */
            jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) {
                jQuery(_owl).find('.item').each(owlAnimateFilter);
            });
        })



    }


    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_12_content() {
        jQuery('.testimonial-12-content').owlCarousel({
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            center: true,
            margin: 0,
            navText: ['<i class="flaticon-arrows"></i>', '<i class="flaticon-point-to"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1140: {
                    items: 3
                }
            }
        });
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel_11() {
        jQuery('.home-client-carousel11').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 5,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 5
                }
            }
        });
    }


    //  Team Carousel function by = owl.carousel.js ========================== //
    function team_carousel() {
        jQuery('.team-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: false,
            navText: ['<i>Prev</i>', '<i>Next</i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1000: {
                    items: 2
                }
            }
        });
    }


    // > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
    function project_carousel() {
        jQuery('.project-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 20,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                640: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1366: {
                    items: 4
                }

            }
        });
    }


    // Home page Testimonial Slider function by = owl.carousel.js ========================== //
    function testimonial_11_content() {
        jQuery('.testimonial-11-content').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1200: {
                    items: 2
                }
            }
        });
    }


    //  Service Gallery Carousel function by = owl.carousel.js ========================== //
    function blog_gallery_carousel() {
        jQuery('.blog-gallery-one').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1000: {
                    items: 2
                }
            }
        });
    }



    /** * =============================jquery.owl-filter.js START * Create: 07-09-2016 * Author: Bearsthemes * Version: 1.0.0 */

    "use strict";

    $.fn.owlRemoveItem = function(num) {
        var owl_data = $(this).data('owl.carousel');

        owl_data._items = $.map(owl_data._items, function(data, index) {
            if (index != num) return data;
        })

        $(this).find('.owl-item').eq(num).remove();
    }

    $.fn.owlFilter = function(data, callback) {
        var owl = this,
            owl_data = $(owl).data('owl.carousel'),
            $elemCopy = $('<div>').css('display', 'none');

        /* check attr owl-clone exist */
        if (typeof($(owl).data('owl-clone')) == 'undefined') {
            $(owl).find('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
            $(owl).data('owl-clone', $elemCopy);
        } else {
            $elemCopy = $(owl).data('owl-clone');
        }

        /* clear content */
        owl.trigger('replace.owl.carousel', ['<div/>']);

        switch (data) {
            case '*':
                $elemCopy.children().each(function() {
                    owl.trigger('add.owl.carousel', [$(this).clone()]);
                })
                break;
            default:
                $elemCopy.find(data).each(function() {
                    owl.trigger('add.owl.carousel', [$(this).parent().clone()]);
                })
                break;
        }

        /* remove item empty when clear */
        owl.owlRemoveItem(0);
        owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);

        // callback
        if (callback) callback.call(this, owl);
    }
    /** ====================================================================END */

    //  Counter Section function by = counterup.min.js
    function counter_section() {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }

    //  MAKE AN APPOINTMENT Section function by = counterup.min.js
    function contact_slide() {
        jQuery('.contact-slide-show').on('click', function() {
            jQuery('.contact-slide-hide').animate({
                'right': '0%'
            });
        });
        jQuery('.contact_close').on('click', function() {
            jQuery('.contact-slide-hide').animate({
                'right': '-100%'
            });
        });
    }

    //menu navigation 
    function menu_navigation() {
        jQuery(".menu-btn").on('click', function() {
            jQuery(".full-menu").fadeIn(500);
        });
        jQuery('.full-menu-close').on('click', function() {
            jQuery(".full-menu").fadeToggle(500);
        });
    }


    jQuery('.nav-tabs a').on('click', function() {
        e.preventDefault();
        jQuery(this).tab('show');
    });

    jQuery('.wt-accordion a').on('click', function() {
        e.preventDefault();
        jQuery(this).tab('show');
    });

    /*--------------------------------------------------------------------------------------------
    	Window on load ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/


    // > masonry function function by = isotope.pkgd.min.js ========================= //	
    function masonryBox() {
        if (jQuery().isotope) {
            var $container = jQuery('.masonry-wrap');
            $container.isotope({
                itemSelector: '.masonry-item',
                transitionDuration: '1s',
                originLeft: true,
                stamp: '.stamp'
            });

            jQuery('.masonry-filter li').on('click', function() {
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({
                    filter: selector
                });
                return false;
            });
        }
    }


    // > background image parallax function by = stellar.js ==================== //	
    function bg_image_stellar() {
        jQuery(function() {
            jQuery.stellar({
                horizontalScrolling: false,
                verticalOffset: 100
            });
        });
    }

    // > page loader function by = custom.js ========================= //		
    function page_loader() {
        $('.loading-area').fadeOut(1000);
    }

    /*--------------------------------------------------------------------------------------------
        Window on scroll ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }

    // Bootstrap Select box function by  = bootstrap-select.min.js
    function Bootstrap_Select() {
        jQuery('.selectpicker').selectpicker();
    }

    /*--------------------------------------------------------------------------------------------
    	document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/
    jQuery(document).ready(function() {
        // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
        lightbox_popup(),
            // > Top Search bar Show Hide function by = custom.js  		
            site_search(),
            //  > Top Search bar Show Hide function by = custom.js =================== //	
            site_search2(),
            //  > Top Search bar Show Hide function by = custom.js =================== //	
            search_13(),
            //menu navigation
            menu_navigation(),
            // > Video responsive function by = custom.js 
            video_responsive(),
            // > Top cart list Show Hide function by = custom.js =================== //	
            cart_block(),
            // > magnificPopup function	by = magnific-popup.js
            magnific_popup(),
            // > magnificPopup for video function	by = magnific-popup.js
            magnific_video(),
            // > Vertically center Bootstrap modal popup function by = custom.js
            popup_vertical_center();
        // > Main menu sticky on top  when scroll down function by = custom.js		
        sticky_header(),
            // > Sidebar sticky  when scroll down function by = custom.js ========== //		
            sticky_sidebar(),
            // > page scroll top on button click function by = custom.js	
            scroll_top(),
            // > input type file function by = custom.js	 	
            input_type_file_form(),
            // > input Placeholder in IE9 function by = custom.js		
            placeholderSupport(),
            // > footer fixed on bottom function by = custom.js	
            footer_fixed(),
            // > accordion active calss function by = custom.js ========================= //			
            accordion_active(),
            // > My Account Nav submenu show hide on mobile by = custom.js
            Submenu_toogle_adminnav(),
            // > Nav submenu on off function by = custome.js ===================//
            // mobile_nav(),
            // > Nav submenu show hide on mobile by = custom.js
            mobile_nav_2(),
            // Mobile side drawer function by = custom.js
            mobile_side_drawer(),
            // Gallery slider function by = owl.carousel.js ========================== //
            gallery_slider2(),
            // Project slider function by = owl.carousel.js ========================== //
            project_detail_slider(),
            // Home page visited place function by = owl.carousel.js ========================== //
            services_slider(),
            // Home page how-we-work function by = owl.carousel.js ========================== //
            how_we_work(),
            // Home page Project Slider function by = owl.carousel.js ========================== //
            project_1_slider(),
            // featured products Slider function by = owl.carousel.js ========================== //
            featured_products(),
            // Home page Project gallery 1 function by = owl.carousel.js ========================== //
            project_gallery_one(),
            // > work carousel  function by = owl.carousel.js ========================== //
            projects_carousel2()
        // > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
        input_number_vertical_form(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_1_content(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_2_content(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_3_content(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_13_content(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_4_content(),
            // > Testimonial carousel  function by = owl.carousel.js ========================== //
            testimonial_5_content(),
            // Gallery slider function by = owl.carousel.js ========================== //
            gallery_slider(),
            //  Client logo Carousel function by = owl.carousel.js ========================== //
            home_client_carousel_2(),
            // > Home_project_slider Full Screen with no margin function by = owl.carousel.js ========================== //
            home3_projects_slider(),
            // > project-style-new carousel function by = owl.carousel.js ========================== //
            services_style_new(),
            // > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
            home_projects_filter(),
            //  Service Gallery Carousel twelve function by = owl.carousel.js ========================== //
            service_button_filter(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_12_content(),
            // Service Gallery Carousel two function by = owl.carousel.js ========================== //
            services_gallery_carousel_two(),
            //  Client logo Carousel function by = owl.carousel.js ========================== //
            home_client_carousel_11(),
            //  Team Carousel function by = owl.carousel.js ========================== //
            team_carousel(),
            // > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
            project_carousel(),
            // Home page Testimonial Slider function by = owl.carousel.js ========================== //
            testimonial_11_content(),
            //  Service Gallery Carousel function by = owl.carousel.js ========================== //
            blog_gallery_carousel(),
            //  Counter Section function by = counterup.min.js ========================== //
            counter_section(),
            //  MAKE AN APPOINTMENT Section function by = counterup.min.js
            contact_slide();

    });

    /*--------------------------------------------------------------------------------------------
    	Window Load START
    ---------------------------------------------------------------------------------------------*/
    jQuery(window).on('load', function() {
        // Bootstrap Select box function by  = bootstrap-select.min.js
        Bootstrap_Select(),
            // > masonry function function by = isotope.pkgd.min.js		
            masonryBox(),
            // > background image parallax function by = stellar.js	
            bg_image_stellar(),
            // > page loader function by = custom.js		
            page_loader();
    });

    /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

    jQuery(window).on('scroll', function() {
        // > Window on scroll header color fill 
        color_fill_header();
    });

    /*===========================
    	Window Resize ALL FUNCTION START
    ===========================*/

    jQuery(window).on('resize', function() {
        // > footer fixed on bottom function by = custom.js		 
        footer_fixed();
    });

    /*===========================
    	Document on  Submit FUNCTION START
    ===========================*/

    // > Contact form function by = custom.js	
    jQuery(document).on('submit', 'form.cons-contact-form', function(e) {
        e.preventDefault();
        var form = jQuery(this);
        /* sending message */
        jQuery.ajax({
            url: 'https://thewebmax.com/industro/form-handler2.php',
            data: form.serialize() + "&action=contactform",
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function() {
                jQuery('.loading-area').show();
            },

            success: function(data) {
                jQuery('.loading-area').hide();
                if (data['success']) {
                    jQuery("<div class='alert alert-success'>" + data['message'] + "</div>").insertBefore('form.cons-contact-form');
                } else {
                    jQuery("<div class='alert alert-danger'>" + data['message'] + "</div>").insertBefore('form.cons-contact-form');
                }
            }
        });
        jQuery('.cons-contact-form').trigger("reset");
        return false;
    });




    /*===========================
    	Document on  Submit FUNCTION END
    ===========================*/





})(window.jQuery);




// gallery page Starts
// const images = [
//     {
//         src: 'images/products/Trolley tools and machines/Flatbed Utility Trolley.png',
//         title: 'Flatbed Utility Trolley',
//         Price: '₹14,000/Unit',
//         text: 'Usage/Application: Industrial<br>Color: Blue<br>Material: Mild Steel<br>Surface Treatment: Paint Coated<br>Wheel Material: Rubber<br>No Of Wheels: 4<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Warehouse Material Handling Trolley.png',
//         title: 'Warehouse Material Handling Trolley',
//         Price: '₹9,000/Unit',
//         text: 'No Of Wheels: 4<br>Wheel Color: Red<br>No Of Floors: 2<br>Material: Mild Steel<br>Load Capacity: 100 - 150 Kg<br>Color: Navy Blue<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Stainless Steel Utility Trolley.png',
//         title: 'Stainless Steel Utility Trolley',
//         Price: '₹25,000/Unit',
//         text: 'Usage/Application: Hotel<br>Type: Housekeeping Trolley<br>Structure: Platform<br>Loading Capacity: 150-200 kg<br>Number of Wheels: 4<br>Color: Silver<br>Material: Stainless Steel<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Material Handling Trolley.png',
//         title: 'Material Handling Trolley',
//         Price: '₹10,000/Unit',
//         text: 'Usage/Application: Industrial<br>Material: Mild Steel<br>Load Capacity: 100 - 200 Kg<br>Height: 3 - 4 Feet<br>No of Wheels: 4<br>Surface Treatment: Paint Coated<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Mild Steel Utility Trolley.png',
//         title: 'Mild Steel Utility Trolley',
//         Price: '₹12,000/Unit',
//         text: 'Usage/Application: Industrial<br>Material: Mild Steel<br>Load Capacity: 200-250 Kg<br>No Of Wheels: 6<br>Height: 3 - 4 Feet<br>Color: Blue, Gray<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Flat Utility Trolley.png',
//         title: 'Flat Utility Trolley',
//         Price: '₹15,000/Unit',
//         text: 'Usage/Application: Industrial<br>Features: Light weight, High strength, Strong design<br>Color: Blue, Brown<br>Material: Mild Steel<br>No Of Wheels: 4<br>Wheel Material: Rubber<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Platform Hand Trolley.png',
//         title: 'Platform Hand Trolley',
//         Price: '₹6,000/Unit',
//         text: 'Color: Gray<br>Material: Mild Steel<br>Load Capacity: 50-100 Kg<br>Features: Heat Resistant, Corrosion Resistant<br>Surface Treatment: Paint Coated<br>No of Wheels: 4<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Storage Utility Trolley.png',
//         title: 'Storage Utility Trolley',
//         Price: '₹25,000/Unit',
//         text: 'Usage/Application: Industrial<br>Load Capacity: 400 - 500 Kg<br>Height: 5 - 6 Feet<br>Material: Mild Steel<br>No of Wheels: 4<br>Country of Origin: Made in India<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Heavy Duty Utility Trolley.png',
//         title: 'Heavy Duty Utility Trolley',
//         Price: '₹12,000/Unit',
//         text: 'Usage/Application: Industrial<br>No Of Wheels: 4<br>Height: 3 - 4 Feet<br>Color: Blue<br>Material: Mild Steel (Frame Material)<br>No of Floors: 3<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Industrial Handling Trolley.png',
//         title: 'Industrial Handling Trolley',
//         Price: '₹8,000/Unit',
//         text: 'Load Capacity(kg): 100 kg<br>Material: Mild Steel<br>Usage/Application: Material Handling<br>Color: Blue<br>Number of Wheels: 4<br>Country of Origin: Made in India<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Box Handling Trolley.png',
//         title: 'Box Handling Trolley',
//         Price: '₹5,000/Unit',
//         text: 'Material: Acrylic<br>Load Capacity: 100 kg<br>Usage/Application: Industrial<br>Brand: Anil<br>Color: Black<br>Country of Origin: Made in India<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Stainless Steel Platform Trolley.png',
//         title: 'Stainless Steel Platform Trolley',
//         Price: '₹12,000/Unit',
//         text: 'Load Capacity(kg): 100 kg<br>Usage/Application: Industrial<br>Structure: Heavy<br>Material: SS / MS<br>Color: Silver<br>Country of Origin: Made in India<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Portable Hydraulic Lifting Trolley.png',
//         title: 'Portable Hydraulic Lifting Trolley',
//         Price: '₹30,000/Unit',
//         text: 'Driven Type: Hydraulic<br>Machine Type: Semi Automatic<br>Type: Portable Hydraulic Lifting Trolley<br>Material: Mild Steel, Stainless Steel<br>Number of Tyres: 4<br>Loading Capacity: 200-250 kg<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Manual Hydraulic Lifting Trolley.png',
//         title: 'Manual Hydraulic Lifting Trolley',
//         Price: '₹40,000/Unit',
//         text: 'Driven Type: Hydraulic<br>Handle Material: Stainless Steel<br>Country of Origin: Made in India<br>Type: Manual Hydraulic Lifting Trolley<br>Color: Orange<br>Load Capacity: 150-200 Kg<br>'
//     },
//     {
//         src: 'images/products/Trolley tools and machines/Material Handling Wire Mesh Trolley.png',
//         title: 'Material Handling Wire Mesh Trolley',
//         Price: '₹30,000/Unit',
//         text: 'Usage/Application: Industrial<br>Load Capacity: 0-50 Kg<br>Height: 1 - 1.5 Feet<br>Material: Mild Steel<br>No of Wheels: 4<br>Country of Origin: Made in India<br>'
//     }

//   ];
//   let currentIndex = 0;

//   function openModal(index) {
//     currentIndex = index;
//     document.getElementById('modal-img').src = images[index].src;
//     document.getElementById('modal-title').innerText = images[index].title;
//     document.getElementById('modal-Price').innerText = `Price: ${images[index].Price}`;
//     document.getElementById('modal-text').innerHTML = images[index].text; // Includes HTML formatting like <br>
//     document.getElementById('modal').style.display = 'block';
//     document.getElementById('header').style.display = 'none';
//   }  
  
//   function closeModal() {
//     document.getElementById('modal').style.display = 'none';
//     document.getElementById('header').style.display = 'block';
//   }
  
//   function prevImage() {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//     updateModal();
//   }
  
//   function nextImage() {
//     currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//     updateModal();
//   }
  
//   function updateModal() {
//     document.getElementById('modal-img').src = images[currentIndex].src;
//     document.getElementById('modal-title').innerText = images[currentIndex].title;
//     document.getElementById('modal-Price').innerText = `Price: ${images[currentIndex].Price}`;
//     document.getElementById('modal-text').innerHTML = images[currentIndex].text; // Includes HTML formatting like <br>
//   }  
  
//   function openModal(index) {
//     currentIndex = index;
//     document.getElementById('modal-img').src = images[index].src;
//     document.getElementById('modal-text').innerText = images[index].text;
//     document.getElementById('modal').style.display = 'block';
//     document.getElementById('header').style.display = 'none';
//   }
  
//   function closeModal() {
//     document.getElementById('modal').style.display = 'none';
//     document.getElementById('header').style.display = 'block';
//   }
  
//   function prevImage() {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//     updateModal();
//   }
  
//   function nextImage() {
//     currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//     updateModal();
//   }
  
//   function updateModal() {
//     document.getElementById('modal-img').src = images[currentIndex].src;
//     document.getElementById('modal-text').innerText = images[currentIndex].text;
//   }



  // gallery page Ends


  const images = [
    {
        src: "images/products/Trolley tools and machines/Stainless Steel Platform Trolley.png",
        title: "Stainless Steel Platform Trolley",
        details: {
            "Load Capacity(kg)": "200 kg",
            "Usage/Application": "Industrial",
            "Material": "SS / MS",
            "Color": "Silver",
            "Country of Origin": "Made in India",
            "Structure": "Heavy"
        }
    },
    {
        src: "images/products/Lifting tools and machines/Handheld Hydraulic Lift.png",
        title: "Handheld Hydraulic Lift",
        details: {
            "Capacity": "200-1000 kg",
            "Max Height": "1500mm",
            "Maximum Load": "700kg",
            "Maximum Rise": "1500mm",
            "Min Height": "300mm",
            "Number Of Stopping Positions": "Customized",
            "Platform Area": "800x500mm",
            "Railing On Platform": "Na",
            "Running Mode": "On wheel"
        }
    },
    {
        src: "images/products/Trolley tools and machines/Storage Utility Trolley.png",
        title: "Storage Utility Trolley",
        details: {
            "Usage/Application": "Industrial",
            "Load Capacity": "400 - 500 Kg",
            "Height": "5 - 6 Feet",
            "Material": "Mild Steel",
            "No of Wheels": "4",
            "Country of Origin": "Made in India"
        }
    },
    {
        src: "images/products/Lifting tools and machines/Hydraulic Scissor Lift.png",
        title: "Hydraulic Scissor Lift",
        details: {
            "Operating Height": "10-20 feet",
            "Running Mode": "Moving",
            "Capacity": "200 - 400 Kg",
            "Lift Type": "Goods Lift",
            "Body Material": "Mild Steel",
            "Drive Technology": "Hydraulic"
        }
    },
    {
        src: "images/products/Lifting tools and machines/Hand Pallet Stacker.png",
        title: "Hand Pallet Stacker",
        details: {
            "Usage/Application": "Industrial",
            "Material": "Mild Steel",
            "Fork Length": "1100mm",
            "Color": "Yellow, Black",
            "Lifting Height": "1600 mm",
            "Country of Origin": "Made in India"
        }
    },
    {
        src: "images/products/Storage and Placers/Stainless Steel Storage Tank.png",
        title: "Stainless Steel Storage Tank",
        details: {
            "Storage Capacity": "250L",
            "Material": "Stainless Steel",
            "Storage Material": "Chemicals, Oils, Water",
            "Steel Grade": "SS316",
            "Tank Orientation": "Vertical",
            "Color": "Silver"
        }
    },
    {
        src: "images/products/Storage and Placers/Pallet Racks.png",
        title: "Pallet Racks",
        details: {
            "Size": "4Mtr X 1 Mtr",
            "Height": "3 Mtr",
            "Load Capacity": "1 Ton",
            "Colour": "Customized Colour",
            "No.of Duck": "2 Ducks"
        }
    },
    {
        src: "images/products/Conveyor systems/Belt Conveyors.png",
        title: "Belt Conveyors",
        details: {
            "Material": "Mild Steel",
            "Width": "500 mm",
            "Length": "2 Mtr",
            "Height": "600 mm",
            "Capacity": "100 kg",
            "Speed": "1 Mtr per Min"
        }
    },
    {
        src: "images/products/Conveyor systems/Gravity Roller Conveyors.png",
        title: "Gravity Roller Conveyors",
        details: {
            "Material": "Mild Steel",
            "Width": "500 mm",
            "Length": "2 Mtr",
            "Height": "600 mm",
            "Capacity": "200 kg"
        }
    },
    {
        src: "images/products/Conveyor systems/Chain Conveyors.png",
        title: "Chain Conveyors",
        details: {
            "Material": "Mild Steel",
            "Width": "500 mm",
            "Length": "2 Mtr",
            "Height": "600 mm",
            "Capacity": "100 kg",
            "Speed": "1 Mtr per Min"
        }
    },
    {
        src: "images/products/Conveyor systems/Bucket Conveyors.png",
        title: "Bucket Conveyors",
        details: {
            "Width": "500 mm",
            "Length": "2 Mtr",
            "Height": "2 Mtr",
            "Capacity": "100 Kg",
            "Speed": "1 Mtr per min"
        }
    },
    {
        src: "images/products/Pick and place systems/Pick And Place Machine.png",
        title: "Pick and Place Robots",
        details: {
            "Width": "1 Mtr",
            "Length": "1 Mtr",
            "Lifting Height": "300 mm",
            "Working": "700 mm",
            "Speed": "200 Per Second",
            "Lifting Capacity": "50 Gram",
            "Catching Type": "Gripper"
        }
    },
    {
        src: "images/products/Pick and place systems/Pick and Place Electromagnetic Units.png",
        title: "Pick and Place Electromagnetic Units",
        details: {
            "Width": "1 Mtr",
            "Length": "1 Mtr",
            "Lifting Height": "300 mm",
            "Working": "700 mm",
            "Speed": "200 Per Second",
            "Lifting Capacity": "50 Gram",
            "Catching Type": "Electromagnet"
        }
    },
    {
        src: "images/products/Pick and place systems/Vaccum pad Pick and Place units.png",
        title: "Vaccum Pad Pick and Place Units",
        details: {
            "Width": "1 Mtr",
            "Length": "1 Mtr",
            "Lifting Height": "300 mm",
            "Working": "700 mm",
            "Speed": "200 Per Second",
            "Lifting Capacity": "50 Gram",
            "Catching Type": "Vaccum Pad"
        }
    },
    {
        src: "images/products/Skimmers/Belt Oil Skimmer.png",
        title: "Mild Steel Oil Skimmer",
        details: {
            "Voltage": "440 Volt AC",
            "Frequency": "50-60 Hz",
            "Phase": "1/4 hp Three Phase",
            "Dimension": "Width 100mm X Height 1mtr",
            "Mounting Facility": "Floor Mounted",
            "Oil Recycle Rate": "30 lph",
            "Gear Box make": "Transtech gear",
            "Material": "Mild Steel"
        }
    },
    {
        src: "images/products/Skimmers/Electro Platin Jigs and Fixes.png",
        title: "Electro Plating Jigs and Fixtures",
        details: {
            "Material Used": "Brass",
            "Catching Material": "Stainless Steel",
            "Current Catcher": "Copper with PVC coating",
            "Design": "As per component"
        }
    },
    {
        src: "images/products/Skimmers/Chiller Coils.png",
        title: "Chiller Coils",
        details: {
            "Material Used": "Stainless Steel",
            "Pipe Dia": "40 mm",
            "Coil Dia": "500 mm",
            "Height": "1 Mtr",
            "Purpose": "Filling or Heating",
            "No. of Coil": "20 Nos"
        }
    },
    {
        src: "images/products/Skimmers/Mezzanine Floors.png",
        title: "Mezzanine Floor",
        details: {
            "Size": "As per Customer",
            "Height": "2.5 Mtr",
            "Purpose": "For Office / Storage",
            "Made out of": "MS Structure"
        }
    },
    {
        src: "images/products/Skimmers/Paint Booth.png",
        title: "Paint Booth",
        details: {
            "Width": "1.2 Mtr",
            "Length": "1.2 Mtr",
            "Height": "2 Mtr",
            "Suction": "1.2 Kg/ Cm2",
            "Suction Type": "Water Filter/ Gate Filter"
        }
    },
    {
        src: "images/products/Skimmers/Assembly Tables and Desks.png",
        title: "Assembly Tables and Desks",
        details: {
            "Size": "1.5 Mtr X 750mm",
            "Working Height": "900 mm",
            "Total Height": "2 mm",
            "Table Top": "Nylon / Stainless Steel"
        }
    },
    {
        src: "images/products/Skimmers/Acoustic Rooms.png",
        title: "Acoustics Rooms",
        details: {
            "Width": "1.5 Mtr",
            "Length": "1.5 Mtr",
            "Height": "2 Mtr",
            "Application Purpose": "Bowl Feeder & Sound Testing",
            "Noise Level": "85 db"
        }
    },
    {
        src: "images/products/Skimmers/Auto-Lubrication Systems.png",
        title: "Auto Lubrication Systems",
        details: {
            "Country of Origin": "India",
            "Tank Capacity": "5 Litres",
            "Pressure": "4 Bar",
            "Lubricant Oil Level": "0.1 cc per second",
            "Name of Manufacturer": "Anil Brothers"
        }
    }
  
];


  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    document.getElementById('modal-img').src = images[index].src;
    document.getElementById('modal-title').innerText = images[index].title;
    // Create a table dynamically for the details
    const details = images[index].details; // Assuming 'details' is already parsed as an object
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    for (const [key, value] of Object.entries(details)) {
      const row = document.createElement('tr');

      // Create the first column for the key
      const keyCell = document.createElement('td');
      keyCell.textContent = key;
      keyCell.style.fontWeight = 'bold';
      keyCell.style.border = '1px solid #ccc';
      keyCell.style.padding = '8px';

      // Create the second column for the value
      const valueCell = document.createElement('td');
      valueCell.textContent = value;
      valueCell.style.border = '1px solid #ccc';
      valueCell.style.padding = '8px';

      row.appendChild(keyCell);
      row.appendChild(valueCell);
      table.appendChild(row);
    }

    // Replace modal-text content with the new table
    const modalText = document.getElementById('modal-text');
    modalText.innerHTML = ''; // Clear previous content
    modalText.appendChild(table);
    document.getElementById('modal').style.display = 'block';
    document.getElementById('header').style.display = 'none';
  }  
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('header').style.display = 'block';
  }
  
  function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
  }
  
  function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
  }
  
  function updateModal() {
    document.getElementById('modal-img').src = images[currentIndex].src;
    document.getElementById('modal-title').innerText = images[currentIndex].title;
    const details = images[currentIndex].details; // Assuming 'details' is already parsed as an object
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    for (const [key, value] of Object.entries(details)) {
      const row = document.createElement('tr');

      // Create the first column for the key
      const keyCell = document.createElement('td');
      keyCell.textContent = key;
      keyCell.style.fontWeight = 'bold';
      keyCell.style.border = '1px solid #ccc';
      keyCell.style.padding = '8px';

      // Create the second column for the value
      const valueCell = document.createElement('td');
      valueCell.textContent = value;
      valueCell.style.border = '1px solid #ccc';
      valueCell.style.padding = '8px';

      row.appendChild(keyCell);
      row.appendChild(valueCell);
      table.appendChild(row);
    }

    // Replace modal-text content with the new table
    const modalText = document.getElementById('modal-text');
    modalText.innerHTML = ''; // Clear previous content
    modalText.appendChild(table);
  }



  
