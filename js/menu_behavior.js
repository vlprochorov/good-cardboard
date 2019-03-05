// menu-effect
var menuHeight = $('.menu').height();

$(window).scroll(function(){
    if($(this).scrollTop() > menuHeight ){
        $('nav.menu').addClass('nav-fixed');
    }else{
        $('nav.menu').removeClass('nav-fixed');
    }
});
//close/open mobile-menu
$(document).ready(function(){
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu-mobile');
    var nav_link = $('.menu-mobile a')
    
    link.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu-mobile_active');
    });  
});