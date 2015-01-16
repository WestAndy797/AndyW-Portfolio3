/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Asthetics for different calsses or ids ex: sibling or nvidia */
$("document").ready(function() {
   // $(".sibling").css("background-color", "blue");
   // $('p:last').css("background-color", "purple"); 
    $('#nvidia').bind('click', alertButtonClick);
    $("tech").css("background-color", 'red');
    $("proj").css("background-color", 'red');
    $("links").css("background-color", 'blue');
    $('#Batman2').bind('click', hideTheImage);
    $('#Batman3').bind('click', showTheImage);
    $('#nvidia2').bind('click', hideNvidia);
    $('#nvidia3').bind('click', showNvidia);
    $('#Batman1').bind('click', alertButton);
   /* $('#wrapper').tubular({videoId: 'QKx_mB3GC5I'});*/


            $("#filter").keyup(function() {

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $(".commentlist").each(function() {

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });

        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number Of Matches To Your Search = " + count); 
     
});
/* Click the nvidia logo */
function alertButtonClick() {
    alert("The Way It's Meant To Be Played");
}
/* click the batman logo */
function alertButton() {
    alert("I'm Batman!");
}
// batman logo//
function hideTheImage() {
    $('#Batman1').hide('puff', {}, 2500);
}
function showTheImage() {
    $('#Batman1').show('puff', {}, 2500);
}
//nvidia logo//
function hideNvidia() {
    $('#nvidia').hide('puff', {}, 2500);
}
function showNvidia() {
    $('#nvidia').show('puff', {}, 2500);
}
});