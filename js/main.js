$('#recommendation').hide();

$('.tab_menu_btn a').click(function(){
    $('.all_container > div').hide().filter(this.hash).fadeIn();

    $('.tab_menu_btn a').removeClass('active');
    $(this).addClass('active');

    return false;
}).filter(':eq(0)').click();


$(window).scroll(function(){
    let tab_menu_offset = $('.tab_menu_btn').offset().top;
    if($(window).scrollTop() === 0){
        $('.tab_menu_btn').removeClass('fix');
    }else if($(window).scrollTop() <= tab_menu_offset){
        $('.tab_menu_btn').addClass('fix');
    }
})
