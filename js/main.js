$(()=>{
    let left_btn = $('.left .txt-area');
    let right_btn = $('.right .txt-area');
    let bg = $('#wrap');

    left_btn.click(function(){
        bg.toggleClass('left-active');
    });
    right_btn.click(function(){
        bg.toggleClass('right-active');
    });
});