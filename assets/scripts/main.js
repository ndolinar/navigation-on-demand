var BASE_URL = 'http://192.168.64.13/neja/nd-personal-page/';


$(document).ready(function(){
    setTimeout(function(){
        $('.star').fadeIn(4000);
    },1500);

    $('.arcs-wrap').delay(800).fadeIn(600);
    $('.show-content').on('click', function (e) {
        e.preventDefault();
        $('.link2').mouseup();
    });


    var timer;
    var pointX, pointY;

    $('body').on("mousedown",function(e){
        $('.help-text').hide();
        $('.arcs-wrap').css('opacity', 1);
        pointX = e.pageX;
        pointY = e.pageY;

        if (e.which == 1) {
            timer = setTimeout(function () {
                $('.arcs-wrap').css({'top': pointY-100, 'left': pointX-100}).fadeIn(150);
            },170);
        } else {
            return;
        }

    }).on("mouseup",function(){
            clearTimeout(timer);
            $('.arcs-wrap').fadeOut(150);
        });

    $('.arcs p').mouseenter(function () {
        var $this = $(this);
        if($this.hasClass('link1')) {
            $('.arcs div').css('border-top-color', '#d3d3d3');
        } else if($this.hasClass('link2')) {
            $('.arcs div').css('border-bottom-color', '#d3d3d3');
        } else if($this.hasClass('link3')) {
            $('.arcs div').css('border-right-color', '#d3d3d3');
        } else if($this.hasClass('link4')) {
            $('.arcs div').css({'border-left-color': '#d3d3d3'});
        }


    }).mouseleave(function () {

            $('.arcs div').css('border-color', '#686967');
        });

    $('.arcs p').mouseup(function () {

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

    $('.direction').mouseenter(function () {
        var $this = $(this);
        if ($this.hasClass('top')) {
            $('.arcs div').css('border-top-color', '#d3d3d3');
        } else if ($this.hasClass('bottom')) {
            $('.arcs div').css('border-bottom-color', '#d3d3d3');
        } else if ($this.hasClass('right')) {
            $('.arcs div').css('border-right-color', '#d3d3d3');
        } else if ($this.hasClass('left')) {
            $('.arcs div').css('border-left-color', '#d3d3d3');
        }
    }).mouseleave(function () {
            $('.arcs div').css('border-color', '#686967');
        });
    $('.direction').mouseup(function () {
        var $this = $(this);

        if($this.hasClass('top')) {
            $('.show-home').click();
        } else if ($this.hasClass('bottom')) {
            $('.show-about').click();
        } else if ($this.hasClass('right')) {
            $('.show-projects').click();
        } else if ($this.hasClass('left')) {
            $('.show-contact').click();
        }
    });


    var elem = $('.upper-radius');
    var elem_shadow = $('.radius');
    $('.open-egg').on('click', function(e){
        $(this).addClass('cog-rotate');
        e.preventDefault();
        if (!elem.is(':animated')) {
            elem.addClass('egg-animation');
            elem_shadow.addClass('shadow-animation');
        }
    });

    elem.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
        elem.removeClass('egg-animation');
        elem_shadow.removeClass('shadow-animation');
        $('.open-egg').removeClass('cog-rotate');

    });

    function changeIcons($this) {
        if(activePage == 'home') {$this.siblings('.show-home').find('i.fa').toggleClass('fa-angle-up fa-home');}
        else if(activePage == 'about') {$this.siblings('.show-about').find('i.fa').toggleClass('fa-angle-down fa-user');}
        else if(activePage == 'projects') {$this.siblings('.show-projects').find('i.fa').toggleClass('fa-angle-right fa-code');}
        else if(activePage == 'contact') {$this.siblings('.show-contact').find('i.fa').toggleClass('fa-angle-left fa-envelope');}
    }

    var activePage = 'home';
    $('.show-me').on('click', function (e) {
        e.preventDefault();
        $('.show-me').removeClass('active-link');

        var $this = $(this);
        $this.addClass('active-link');

        if ($this.hasClass('show-about')) {
            if(activePage == 'about') {
                return;
            } else {
                $this.find('i.fa').css('color', '#444');
                $this.css('background', 'transparent');
                changeIcons($this);
                $('.page').css({zIndex:700});
                $('.active-page').css({zIndex: 800});

                $('.active-page').removeClass('active-page');

                $('.page-1').css({top: '100%', left: 0, zIndex:900});

                $('.page-1').animate({
                    top: 0
                }, 700);

                activePage = 'about';
                $('.page-1').addClass('active-page');
            }

        } else if ($this.hasClass('show-projects')) {
            if(activePage == 'projects') {
                return;
            } else {
                $this.find('i.fa').toggleClass('fa-angle-right fa-code');
                changeIcons($this);
                $('.page').css({zIndex:700});
                $('.active-page').css({zIndex: 800});
                $('.active-page').removeClass('active-page');
                $('.page-2').css({left: '100%', top: 0, zIndex:900});
                $('.page-2').animate({
                    left: 0
                }, 700);
            }
            activePage = 'projects';
            $('.page-2').addClass('active-page');

        } else if ($this.hasClass('show-contact')) {
            if (activePage == 'contact') {return;}
            else {
                $this.find('i.fa').toggleClass('fa-angle-left fa-envelope');
                changeIcons($this);
                $('.page').css({zIndex:700});
                $('.active-page').css({zIndex: 800});
                $('.active-page').removeClass('active-page');
                $('.page-3').css({
                    top: 0, left: '-100%', zIndex:900});
                $('.page-3').animate({
                    left: '0'
                }, 700);
            }
            activePage = 'contact'
            $('.page-3').addClass('active-page');

        } else if ($this.hasClass('show-home')) {
            if (activePage == 'home') {
                return;
            } else {
                $this.find('i.fa').toggleClass('fa-angle-up fa-home');
                changeIcons($this);
                $('.page').css({zIndex:700});
                $('.active-page').css({zIndex: 800});
                $('.active-page').removeClass('active-page');
                $('.intro-wrap').css({
                    top: '-100%', left: 0, zIndex:900});
                $('.intro-wrap').animate({
                    top: 0
                }, 700)
            }
            activePage = 'home';
            $('.intro-wrap').addClass('active-page');
        }
        e.preventDefault();


    });
    var pp = $('.page-progress');

    $(window).scroll(function() {
        if ($('.page-progress').length) {
            scroll_top = $('body').scrollTop();
            pp.css('width', (scroll_top * 100) / possible_scroll + '%');
        }
    });

    $(window).resize(function(){
        if ($('.page-progress').length) {
            possible_scroll = $(document).height() - $(window).height();
            scroll_top = $('body').scrollTop();

            pp.css('width', (scroll_top * 100) / possible_scroll + '%');
        }
    });
});


var possible_scroll;
var w_height;
var scroll_top;



$(window).load(function(){

    if ($('.page-progress').length) {
        possible_scroll = $(document).height() - $(window).height();

        w_height = $('body').height();
        scroll_top = $('body').scrollTop();
        $('.page-progress').css('width', (scroll_top * 100) / possible_scroll + '%');
        console.log('height: ' + w_height);
        console.log('possible_scroll: ' + possible_scroll);
        console.log('scrollTop: ' + scroll_top);
    }


});

