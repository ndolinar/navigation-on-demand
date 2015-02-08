var activePage = 'home';

$(document).ready(function(){


    $('.arcs-wrap').delay(800).fadeIn(600);
    var timer,
        pointX,
        pointY;

    var arcSection = $('.arcs p'),
        circle = $('.arcs div');

    $('body').mousedown(function(e){
        if ($('.help-text').length) {
            $('.help-text').remove();
        }
        pointX = e.pageX;
        pointY = e.pageY;

        // if left mouse button
        if (e.which == 1) {
            timer = setTimeout(function () {
                $('.arcs-wrap').css({'top': pointY-100, 'left': pointX-100}).fadeIn(150);
            },170);
        }
    }).mouseup(function(){
            clearTimeout(timer);
            $('.arcs-wrap').fadeOut(150);
        });

    arcSection.mouseenter(function () {
        var $this = $(this);
        if($this.hasClass('link1')) {
            circle.css('border-top-color', '#d3d3d3');
        } else if($this.hasClass('link2')) {
            circle.css('border-bottom-color', '#d3d3d3');
        } else if($this.hasClass('link3')) {
            circle.css('border-right-color', '#d3d3d3');
        } else if($this.hasClass('link4')) {
            circle.css({'border-left-color': '#d3d3d3'});
        }
    }).mouseleave(function () {
            circle.css('border-color', '#686967');
        });

    arcSection.mouseup(function () {
        var $this = $(this);
        if($this.hasClass('link1')) {
            $('.show-home').click();
        } else if ($this.hasClass('link2')) {
            $('.show-about').click();
        } else if ($this.hasClass('link3')) {
            $('.show-projects').click();
        } else if ($this.hasClass('link4')) {
            $('.show-contact').click();
        }
    });

    $('.show-me').on('click', function (e) {
        e.preventDefault();
        $('.show-me').removeClass('active-link');

        var $this = $(this);
        $this.addClass('active-link');

        if ($this.hasClass('show-about')) {
            if(!(activePage == 'about')) {
                changePage($('.page-1'), '100%', 0, 0, 'about');
            }
        } else if ($this.hasClass('show-projects')) {
            if(!(activePage == 'projects')) {
                changePage($('.page-2'), '0', '100%', 1, 'projects');
            }
        } else if ($this.hasClass('show-contact')) {
            if (!(activePage == 'contact')) {
                changePage($('.page-3'), 0, '-100%', 1, 'contact');
            }
        } else if ($this.hasClass('show-home')) {
            if (!(activePage == 'home')) {
                changePage($('.page-0'), '-100%', 0, 0, 'home');
            }
        }
    });
});

function changePage(page, top, left, toLeft, name) {
    $('.page').css({zIndex: 700});
    $('.active-page')
        .css({zIndex: 800})
        .removeClass('active-page');
    page.css({top: top, left: left, zIndex: 900});
    if (toLeft) {
        page.animate({left: 0}, 700);
    } else {
        page.animate({top: 0}, 700);
    }
    activePage = name;
    page.addClass('active-page');
}