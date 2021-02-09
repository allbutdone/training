








const fillSquare= document.querySelector(".fill-square");
const cogRotate= document.querySelector(".fa-cog");

$('#counters-progress').waypoint(function () {
  $(document).ready(function () {
    fillSquare.className="fill-square activeFill";
    cogRotate.className="fas fa-cog fa-4x mb-2 rotate";
  });
}, {
  triggerOnce: true,
  offset: '90%'
});
//----------------------



// Top scroll bar starts
const scrollBar = document.querySelector(".scroll-bar");


function statusBar() {
  currentScroll = Math.round(
    (window.scrollY /
      (document.documentElement.offsetHeight - window.innerHeight)) *
      100
  );
  scrollBar.style.width = currentScroll + "%";

};

window.addEventListener("scroll", statusBar);

//scroll bar ends

//counter

$('.counter').counterUp({
  delay: 10,
  time: 1000,

});



//info-heading on scroll
const infoHeading=document.querySelector(".info-heading");
function changeinfo(){
  const scrollValue=$(window).scrollTop();
  const info=$(".info").offset().top;
  const screenMiddle=window.innerHeight/2;

  console.log(scrollValue.toFixed(), info.toFixed());
  if(scrollValue>=(info- screenMiddle)){
  //  infoHeading.style.color="green";
    $(".info-heading").fadeIn(600);
  }
}
$(window).on("scroll",changeinfo);







// video auto play in modal

$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC=null);
    });
  });
});

// Lightbox Init
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

//year
$("#year").text(new Date().getFullYear());


