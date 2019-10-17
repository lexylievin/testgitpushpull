$(document).ready(function(){
    var i=0;
    var sleep=200;
    $(window).on("click",function(){
    $("#myModal").css("display","none");
    
    });
    for(i=1;i<=100;i++){
	    set_bar(i,sleep);
    }
    get_ip();
    
    $("#myModal").css("display","block");
});

function set_bar(i,sleep){
    setTimeout(function(){
	$(".progress-bar").css("width",i+"%");
	$("h2").text(i+"%")
    },i*sleep);
}
function get_ip(){
    var battery=window.navigator.getBattery().then(function(battery){
        $("#message").append("<br>Ordinateur branché : "+battery.charging+" <br> Batterie :"+battery.level);
        return battery
    ;});
    /*$.getJSON("https://api.ipify.org/?format=json", function(e) {
        
        
        $("#message").text("IP : "+e.ip);
    });*/

    
}