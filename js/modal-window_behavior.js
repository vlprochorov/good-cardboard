$(document).ready(function(){
    $('.header-callback-button').on("click", function(){
        $('.overlay').show();
    });
    $('.products-card__btn').on("click", function(){
        $('.overlay').show();
    });
    $('.form__button').on("click", function(){
        $('.overlay').show();
    });
    $('.form-style__button').on("click", function(){
        $('.overlay').show();
    });
    $('.contacts-button').on("click", function(){
        $('.overlay').show();
    });
    
    $('.popup-close').on("click", function(){
        $('.overlay').hide();
    });
});