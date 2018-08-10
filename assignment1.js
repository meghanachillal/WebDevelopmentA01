/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("body").ready(init);
function init(){
	/*$(this).on( "click",  changeColor);*/
}

function changeColor(event){	
	var color = $("#colorname")[0].value;
    $(event).css("background-color",color);
	$(event).css("opacity","1");
}

function resetButton()
{
	$(".bttn").css("color","inherit");
	$(".bttn").css("background-color","white");
	$(".bttn").css("opacity","1");
	$("#colorname")[0].value="";
}
