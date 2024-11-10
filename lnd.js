// You can add any additional JavaScript here if needed
$(document).ready(function() {
    // Example: initialize carousel
    $('.carousel').carousel({
        interval: 2000
    });
});

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initialize the carousel
showSlide(slideIndex);

// Optional: Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

function initMap() {
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Team member hover effect
$('.team-member').hover(
    function() {
        $(this).find('.member-info').fadeIn();
    }, function() {
        $(this).find('.member-info').fadeOut();
    }
);
function initMap() {
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  