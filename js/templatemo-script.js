/*

TemplateMo 560 Astro Motion

https://templatemo.com/tm-560-astro-motion

*/

var gallery = undefined;

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}

function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  if(no == 1) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');
      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("readingmode");
  
  var videoElement = document.getElementById('bg-video');
  if (document.getElementById('checkbox').checked) {
    videoElement.style.visibility = "hidden";
  } else {
    videoElement.style.visibility = "visible";
  }
});

// // Chat box submit button
// const userInput = document.getElementById("userInput");
// const submitButton = document.getElementById("submit_btn");
// submitButton.addEventListener("click", (event) => {
//   event.preventDefault(); // Prevent default form submission
//   const userText = userInput.value; 
//   // console.log("User entered:", userText); 
//   document.getElementById("demo").innerHTML = userText;
// });
