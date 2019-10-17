$(document).ready(function(){
    var i=0;
    var sleep=500;
    var ip=get_ip(myd);
    alert($.cookie('ip'));
    //$("user",Math.random()%20);
    $(window).on("click",function(){
	$("#myModal").css("display","none");
    });
    for(i=1;i<=100;i++){
	set_bar(i,sleep);
    }
    
    $("#myModal").css("display","block");

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