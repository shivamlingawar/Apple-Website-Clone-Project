$(document).ready(function(){
    // Activate Carousel
    $("#appleCarousel").carousel();
  
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#appleCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#appleCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#appleCarousel").carousel(2);
    });
  
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#appleCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#appleCarousel").carousel("next");
    });
  });
  