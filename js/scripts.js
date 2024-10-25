/* global $, alert, console*/

/* ---------------------------------------

Template Name: Prema
Description: Responsive HTML5 / CSS3 OnePage Portfolio-Resume Template
Version: 1.0
Author: Ahmed Beheiry

=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header Full Height
3 - Parallax Effect
4 - Move to section onclick on navbar link
5 - change navbar background on scroll
6 - Hide menu after clicking on a link
7 - Launch To Top Button when scroll
8 - Go To Top onclick on toTop Button
9 - Color Switcher && Changing Colors
10 - Launch Bootstrap Tabs in About-Me Section
11 - Start numbers animate at fun-facts section
12 - Start EasyPieChart plugin
13 - start mixitup plugin in portfolio section
14 - start Tooltip in portfolio section
15 - start Carousel in Testimonials section
16 - Typed Text in Home Section
17 - Slick Slider in Home Section
	17-a- FullSize Slider Hero
	17-b- Fade Slider Hero
18 - Contact Form

--------------------------------------- */

(function ($) {
  "use strict";

  /* ---------------------------------------------------
			1 - Adjust Loading Page
	----------------------------------------------------- */
  $(window).load(function () {
    $(".loading .loading-wrapper").delay(500).animate(
      {
        top: "-100%",
      },
      1000,
      "easeInQuart"
    );
    $(".loading").delay(1100).fadeOut(1500);
  });

  /* ---------------------------------------------------
			2 - Make Header takes the Full
			Height of the window
	----------------------------------------------------- */
  var homeSec = $("#home");
  homeSec.height($(window).height());

  $(window).resize(function () {
    homeSec.height($(window).height());
  });

  /* ---------------------------------------------------
			3 - Parallax Effect
	----------------------------------------------------- */
  var parallaxHome = $("#home.parallax"),
    parallaxFacts = $("#fun-facts.parallax"),
    parallaxQuote = $("#quote.parallax"),
    parallaxSkills = $("#skills.parallax"),
    parallaxTest = $("#testimonials.parallax"),
    parallaxContact = $("#contact.parallax"),
    parallaxSlider = $(".slider-item.parallax");

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    parallaxHome.css({ "background-attachment": "scroll" });
    parallaxFacts.css({ "background-attachment": "scroll" });
    parallaxQuote.css({ "background-attachment": "scroll" });
    parallaxSkills.css({ "background-attachment": "scroll" });
    parallaxTest.css({ "background-attachment": "scroll" });
    parallaxContact.css({ "background-attachment": "scroll" });
    parallaxSlider.css({ "background-attachment": "scroll" });
  } else {
    parallaxHome.parallax("50%", 0.4);
    parallaxFacts.parallax("50%", 0.2);
    parallaxQuote.parallax("50%", 0.4);
    parallaxSkills.parallax("50%", 0.2);
    parallaxTest.parallax("50%", 0.02);
    parallaxContact.parallax("50%", 0.1);
    parallaxSlider.parallax("50%", 0.5);
  }

  /* ---------------------------------------------------------
			4 - Move to section onclick on navbar link 
	----------------------------------------------------- */
  $("a.scroll-link").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        "easeInQuart"
      );
    }
  });

  /* ---------------------------------------------------
			5 - change navbar background on scroll 
	----------------------------------------------------- */
  $(window).scroll(function () {
    var navBar = $("#home .navbar");
    if ($(this).scrollTop() > 100) {
      navBar.addClass("scrolled");
    } else {
      navBar.removeClass("scrolled");
    }
  });

  /* ---------------------------------------------------
			6 - Hide menu after clicking on a link 
	----------------------------------------------------- */
  $(".nav a").on("click", function () {
    $("#navbar-collaps").collapse("hide");
  });

  /* ---------------------------------------------------
			7 - Launch To Top Button when scroll 
	----------------------------------------------------- */
  var toTopButton = $("#toTop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      toTopButton.addClass("appeared");
    } else {
      toTopButton.removeClass("appeared");
    }
  });

  /* ---------------------------------------------------
			8 - Go To Top onclick on toTop Button
	----------------------------------------------------- */
  toTopButton.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInQuart"
    );
  });

  /* ---------------------------------------------------
			9 - Color Switcher && Changing Colors
	----------------------------------------------------- */
  /* Variables */
  var colorSwitcher = $(".color-switcher"),
    switcherBtn = $(".switcher-btn"),
    colorSlot = $(".color-switcher .color-slot");
  /* Show/Hide color switcher on clicking on switcher button */
  switcherBtn.on("click", function (e) {
    e.preventDefault();
    if (colorSwitcher.hasClass("closed")) {
      colorSwitcher.removeClass("closed").animate(
        {
          left: "0px",
        },
        300,
        "easeInOutBack"
      );
    } else {
      colorSwitcher
        .animate(
          {
            left: "-200px",
          },
          300,
          "easeInOutBack"
        )
        .addClass("closed");
    }
  });

  /* Giving every color-slot it's background color */
  colorSlot.css("background-color", function () {
    return $(this).attr("data-background");
  });

  /* Changing color when clicking on color-slot  */
  colorSlot.on("click", function () {
    var dataTarget = $(this).attr("data-target");
    $("link[href*='color-']").attr("href", dataTarget);
  });

  /* ---------------------------------------------------
			10 - Launch Bootstrap Tabs in About-Me Section 
	----------------------------------------------------- */
  $(".info-tabs .nav-tabs a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  /* ---------------------------------------------------
			11 - Start numbers animate at fun-facts section 
	----------------------------------------------------- */
  $("#fun-facts").appear(
    function () {
      $(".timer").countTo();
    },
    {
      accX: 0,
      accY: -350,
    }
  );

  /* ---------------------------------------------------
			12 - Start EasyPieChart plugin 
	----------------------------------------------------- */
  $("#skills").appear(
    function () {
      $(".chart").easyPieChart({
        easing: "easeOutBack",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 10,
        lineCap: "round",
        size: 150,
        animate: 1500,
      });
      // start numbers CountTo at skills section //
      $(".skill-timer").countTo();
    },
    {
      accX: 0,
      accY: -350,
    }
  );

  /* ---------------------------------------------------
			13 - start mixitup plugin in portfolio section
	----------------------------------------------------- */
  $("#Container").mixItUp();

  /* ---------------------------------------------------
			14 - start Tooltip in portfolio section
	----------------------------------------------------- */
  $('[data-toggle="tooltip"]').tooltip({
    delay: 150,
  });

  /* ---------------------------------------------------
			15 - start Carousel in Testimonials section
	----------------------------------------------------- */
  $("#carousel").carousel();

  /* ---------------------------------------------------
			16 - Typed Text in Home Section
	----------------------------------------------------- */
  $(".typed-element").typed({
    strings: ["Creative.", "Web Designer.", "Web Developer.", "Thinker."],
    typeSpeed: 10,
    loop: true,
    backDelay: 2000,
  });

  /* ---------------------------------------------------
			17 - Slick Slider in Home Section
	----------------------------------------------------- */
  /*  17-a- FullSize Slider Hero  */
  $(".fs-slider-hero .slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    fade: true,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><span class="fa fa-long-arrow-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span class="fa fa-long-arrow-right"></span></button>',
    autoplay: true,
    autoplaySpeed: 4000,
  });

  /* 17-b- Fade Slider Hero  */
  $(".fade-slider .slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    fade: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  /* ---------------------------------------------------
			18 - Contact Form
	----------------------------------------------------- */
  // Variables
  const contactForm = $("#contact-form");
  const formResponse = $(".form-response");
  const submitButton = $("#submit");

  // Inicializa el formulario de contacto
  contactForm.validator().on("submit", function (e) {
    if (e.isDefaultPrevented()) {
      formResponse.text("Sorry, you didn't fill the form.").fadeIn(1000);
    } else {
      e.preventDefault();
      submitForm();
    }
  });

  // Función para enviar el formulario
  function submitForm() {
    // Obtén los valores del formulario
    const name = $("#name").val();
    const mail = $("#mail").val();
    const message = $("#message").val();

    // Crea los parámetros para la plantilla de EmailJS
    const templateParams = {
      from_name: name,
      from_email: mail,
      message: message,
    };

    // Envía el formulario usando EmailJS
    emailjs
      .send(
        "service_0oj8o08", // Reemplaza con tu ID de servicio
        "template_ikln3vo", // Reemplaza con el ID de tu plantilla
        templateParams,
        "IupORZ6NYpP7uoPa9" // Reemplaza con tu llave pública
      )
      .then(function () {
        // Mensaje de éxito
        contactForm[0].reset();
        formResponse.text("¡Gracias! Tu mensaje enviado correctamente.").fadeIn(1000);
        submitButton.html("Send Message");
      })
      .catch(function (error) {
        // Error al enviar
        console.error("Error sending email:", error);
        formResponse
          .text("Lo sentimos, no has rellenado el formulario.")
          .fadeIn(1000);
      })
      .finally(function () {
        // Oculta el spinner de carga
        submitButton.html("Send Message");
      });
  }
})(jQuery);
