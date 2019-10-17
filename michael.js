$(document).ready(function(){
    var i=0;
    var sleep=500;
    var ip=get_ip(set_cookie);
    alert($.cookie('ip'));
    //$("user",Math.random()%20);
    $("#myModal").css("display","block");
    $(window).on("click",function(){
	$("#myModal").css("display","none");
    });
    for(i=1;i<=100;i++){
	set_bar(i,sleep);
    }
    

});

function set_bar(i,sleep){
    setTimeout(function(){
	$(".progress-bar").css("width",i+"%");
	$("h2").text(i+"%")
    },i*sleep);
}
function get_ip(callback){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
        callback(e.ip);
    });

}

function set_cookie(ip){
    $.cookie('ip',ip);
}