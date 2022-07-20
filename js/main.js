$(function () {

    'use strict';

    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            
        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
        

        // images have loaded

    });

    //Image Light Box Popup
    $('.image-link').magnificPopup({type:'image'});

    //Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    

});

function regressiva(){
var segundos = 15;
    setInterval( function(){
        document.getElementById("seg").innerHTML = segundos;
        segundos --;
    }, 1000);

    setTimeout(function(){
        window.location.href = "../index.html#contact";
    }, 15000);
};


