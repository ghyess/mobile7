$(document).ready(function() {
    //메뉴
    $("#hd #menu_bt").click(function() {
       $("#gnb").stop().slideToggle(600); 
        $(this).toggleClass("on");
    });
    
    //메인 페이드인 아웃
    var sw = 1;
    var sldSw = 1;
    var op1, op2;
    var intvM = setInterval(function() { mAni(); }, 4000);
    
    function mAni() {
        if (sldSw==1) {
            sldSw=0;
            op1=0;
            op2=1;
        } else {
            sldSw=1;
            op1=1;
            op2=0;
        }
        $("#main .main_box li").eq(op1).fadeIn(1200);
        $("#main .main_box li").eq(op2).fadeOut(1200);
    };
    
    //탑 버튼
    $("#top").css("display", "none");
    $(function() {
            $(window).scroll(function(){
            if ($(this).scrollTop() >= 300){
                $("#top").fadeIn(600);
            } else {
                $("#top").fadeOut(600);
            }
    });
        $('#top').click(function(){
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    
    
    //슬라이드
    var wd = parseInt($("#vs").width());
    var intv = setInterval(function() { nAni(); }, 3000);
    
    function nAni() {
        $("#vs .imgBox").not(":animated").animate({"margin-left":-wd+"px"}, 800, function(){
           $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
        });
    }
});