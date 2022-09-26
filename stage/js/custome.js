//Toggle Sidrbar
$(function () 
{
$(".toggle-sidebar").on("click", function() 
{
     $(".sidebar, .content-area").toggleClass('no-sidebar');
})
});
//Toggle Submenue
$(".toggle-submenue").on("click",function() {
     $(this).next(".child-links").slideToggle();
     $(this).find(".fa-chevron-right").toggleClass("down");

});
    
