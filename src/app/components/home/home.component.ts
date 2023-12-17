import { Component, AfterViewInit } from '@angular/core';

declare var $: any; // Declaración de jQuery

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

    
  ngAfterViewInit() {
    this.initScripts();
  }
  

  initScripts() {
    "use strict";

    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 100);
    };
    spinner();
    
    
    // Initiate the wowjs
    //new WOW().init();

    /*
    // Sticky Navbar
    $(window).scroll( () => {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    */

    /*
    // Back to top button
    $(window).scroll( () => {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    */

    /*
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    */

    /*
    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    */

  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    //carolsel12
    $('.owl-2').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: true,
        nav: true,
        dots: true,
        pauseOnHover: false,
        responsive:{
            600:{
                margin: 20,
                nav: true,
              items: 2
            },
            1000:{
                margin: 20,
                stagePadding: 0,
                nav: true,
              items: 3
            }
        }
    }); 

  }
}

