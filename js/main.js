// console.log("Mina");
// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//  // 30°02′40.20
//   const cairo = { lat: 30.02, lng: 31.14 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: cairo,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: cairo,
//     map: map,
//   });
// }

// Smooth scrolling
//document.getElementById(navbar);
$("#navbar a, .btn").on("click", function(event) {

  if(this.hash !== "") {//Click
    event.preventDefault();//

    const hash = this.hash;
    //(selector).animate({styles},speed)
    $("html, body").animate({scrollTop: $(hash).offset().top -100}, 1000);
  }
});


// navbar Opacity

window.addEventListener("scroll", function() {
  if(window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.5;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

