// Sticky Header
$(document).ready(function () {
    function updateScroll() {
       if ($(window).scrollTop() >= 70) {
          $(".navbar").addClass('sticky');
       } else {
          $(".navbar").removeClass("sticky");
       }
    }
 
    $(function () {
       $(window).scroll(updateScroll);
       updateScroll();
    });
 });


 $(document).ready(function(){
   $("#toggle-btnn").click(function(){
     $(".left-side-menu").toggleClass("full-view");
     $(".right-side-sec").toggleClass("open");
     $(".toggle-btn-aside").toggleClass("move");
   });


   // $(".filter-span").click(function(){
   //    $(".filter-span").toggleClass("open-filter");
   //    $(".right-side-sec").toggleClass("open");
   //  });
 });


 $(document).ready(function(){
     $("#filter").click(function(){
       $(".filter-div").toggleClass("show");
     });
});
 
