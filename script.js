document.getElementById("all").onclick = function () {
  // Swal.fire("You are Redirecting to apple.com (Apple Main Website)").then(
  //   function () {
  //     window.location = "https://www.apple.com/";
  //   }
  // );
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'You are Redirecting to apple.com (Apple Main Website)'
  }).then(
    function () {
      window.location = "https://www.apple.com/";
    }
  );
};

$(document).ready(function () {
  // Activate Carousel
  $("#appleCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#appleCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#appleCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#appleCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#appleCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#appleCarousel").carousel("next");
  });
});
