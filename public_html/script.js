/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Asthetics for different calsses or ids ex: sibling or nvidia */
$("document").ready(function(){
   $(".sibling").css("background-color", "gold"); 
   $('p:last').css("background-color", "purple");
   $('#nvidia').bind('click', alertButtonClick);
   
});
/* Functions for different IDs */
function alertButtonClick(){
    alert("You Pressed The Secret Button")
    
}