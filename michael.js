$(document).ready(function(){
    var i=0;
    var sleep=500;
    for(i=1;i<=100;i++){
	set_bar(i,sleep);
    }
    

});
function set_bar(i,sleep){
    setTimeout(function(){
	$(".progress-bar").css("width",i+"%");
	$("h2").text("loading : "+i+"%")
    },i*sleep);
}
