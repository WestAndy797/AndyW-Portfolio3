/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Asthetics for different calsses or ids ex: sibling or nvidia */
$("document").ready(function() {
    $(".sibling").css("background-color", "gold");
    $('p:last').css("background-color", "purple");
    $('#nvidia').bind('click', alertButtonClick);
    $("tech").css("background-color", 'red');
    $("proj").css("background-color", 'red');
    $("links").css("background-color", 'blue');
    $('#Batman2').bind('click', hideTheImage);


});
/* Functions for different IDs */
function alertButtonClick() {
    alert("The Way It's Meant To Be Played");
}
function hideTheImage() {
    console.log("hide");
    $('#Batman1').hide('puff', {}, 2500);
}