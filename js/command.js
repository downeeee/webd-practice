$(function(){
    $(".main_menu li").mouseover(function(){
        $('.sub , .sub_bg').stop().slideDown();
    })
    $(".main_menu li").mouseout(function(){
    $('.sub, .sub_bg').stop().slideUp();
    })



//이미지영역

    $(".fade li").eq(0).siblings().hide();
    
    var n = 0; //0 1 2 index 번호

    setInterval(function(){
        $('.fade li').eq(n).fadeOut()
        if(n == 2){
            n = 0;
        }else{
            n++;
        }//
        $('.fade li').eq(n).fadeIn();
        // $('.fade li').eq(n).fadeIn().siblings().fadeOut();

        console.log(n)
    }, 2500)
})