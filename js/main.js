$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.main-menu').css('display' , 'block');
    })
    $('.fa-times').click(function(){
        $('.main-menu').css('display' , 'none');
    })
    $('.card-like').click(function(){
        $(this).toggleClass('card-like-1');
        
    })

    $('.totop').tottTop({
        duration: 1000 ,
        scrtollTopBtnDuration: 400,
        scrollTop: 100
    });


    
        
})