jQuery(function ($) {
    // Handler for .ready() called.
    if ($("#fullname").length) {
      $("#fullname").on("change keyup paste input", function () {
        console.log($(this).val());
        localStorage.setItem("userName", $(this).val());
      });
    }
  
    if ($(".nomeUser").length) {
      $(".nomeUser").html(
        localStorage.getItem("userName")
          ? localStorage.getItem("userName")
          : "Muito bem"
      );
    }
  });