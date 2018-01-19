$('.collapsible').collapsible();

$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      //onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
      //onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
    }
  );

$('.button-collapse').click(removeOverlay);

function removeOverlay() {
  $('div[id^=sidenav-overlay]').remove();
}

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 100,
    noWrap: true
});

$(document).ready(function(){
  $('.parallax').parallax();
});

// window.addEventListener('load', onVrViewLoad)
//     function onVrViewLoad() {
//         var vrView = new VRView.Player('#vrview1', {
//           width: '100%',
//           height:	500, //You can change this height
//           preview: '', //TODO ADD PREVIEW IMAGE OPTIONAL
//           image: 'http://nicoleiesperida.me/assets/letran2ndfloor_compressed.jpg', //TODO ADD YOUR 360 IMAGE LINK HERE (4028x4028) IMPORTANT: MAKE SURE YOU UPLOAD YOUR IMAGE FIRST TO IMAGE HOSTING SITES
//           is_stereo: true
//         });
//         var vrView = new VRView.Player('#vrview2', {
//           width: '100%',
//           height:	500, //You can change this height
//           preview: '', //TODO ADD PREVIEW IMAGE OPTIONAL
//           image: 'http://nicoleiesperida.me/assets/letran2ndfloor_compressed.jpg', //TODO ADD YOUR 360 IMAGE LINK HERE (4028x4028) IMPORTANT: MAKE SURE YOU UPLOAD YOUR IMAGE FIRST TO IMAGE HOSTING SITES
//           is_stereo: true
//         });
//         var vrView = new VRView.Player('#vrview3', {
//           width: '100%',
//           height:	500, //You can change this height
//           preview: '', //TODO ADD PREVIEW IMAGE OPTIONAL
//           image: 'http://nicoleiesperida.me/assets/letran2ndfloor_compressed.jpg', //TODO ADD YOUR 360 IMAGE LINK HERE (4028x4028) IMPORTANT: MAKE SURE YOU UPLOAD YOUR IMAGE FIRST TO IMAGE HOSTING SITES
//           is_stereo: true
//         });
//         var vrView = new VRView.Player('#vrview4', {
//           width: '100%',
//           height:	500, //You can change this height
//           preview: '', //TODO ADD PREVIEW IMAGE OPTIONAL
//           image: 'http://nicoleiesperida.me/assets/letran2ndfloor_compressed.jpg', //TODO ADD YOUR 360 IMAGE LINK HERE (4028x4028) IMPORTANT: MAKE SURE YOU UPLOAD YOUR IMAGE FIRST TO IMAGE HOSTING SITES
//           is_stereo: true
//         });
//     }
