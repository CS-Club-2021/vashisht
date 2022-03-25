(function ($) {
  "use strict";
  console.log("hello");
  /*START GOOGLE MAP*/
  function initialize() {
    var mapOptions = {
      zoom: 15,
      scrollwheel: false,
      center: new google.maps.LatLng(40.7127837, -74.00594130000002),
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: "assets/img/map_pin.png",
      map: map,
    });
  }
  google.maps.event.addDomListener(window, "load", initialize);
  /*END GOOGLE MAP*/

  // Count Down JS

  var a = $("#simple-timer").syotimer({
    year: 2022,
    month: 4,
    day: 4,
    hour: 20,
    minute: 30,
  });
  console.log(a);

  $(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        user_name: {
          required: true,
          minlength: 4,
        },
        user_email: {
          required: true,
          email: true,
        },
        user_phone: {
          required: true,
        },
        user_message: {
          required: true,
        },
      },
      messages: {
        user_name: {
          required: "Come on, you have a name don't you?",
          minlength: "Your name must consist of at least 2 characters",
        },
        user_email: {
          required: "Please put your email address",
        },

        user_phone: {
          required: "Please put your Phone Number",
        },

        user_message: {
          required: "Put some messages here?",
          minlength: "Your name must consist of at least 2 characters",
        },
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "sendmail.php",
          success: function () {
            $("#contact-form #success").fadeIn();
          },
          error: function () {
            $("#contact-form #error").fadeIn();
          },
        });
      },
    });
  });
})(jQuery);

const brochure = document.querySelector(".brochure");
const overlay = document.querySelector(".overlay");
const brochureButton = document.getElementById("brochure-btn");
brochureButton.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.remove("hidden");
  brochure.classList.remove("hidden");
});
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  brochure.classList.add("hidden");
});
