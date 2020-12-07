// TODO - check this
// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

document.head.insertAdjacentHTML("beforeend", `<style>
.page-home.home-video--load { background-size: 0 0; }
.page-home.home-video--load .site-head, 
.page-home.home-video--load .home, 
.page-home.home-video--load .site-foot { opacity: 0; }
.page-home--finished { background-size: cover; }
.page-home--finished .site-head, 
.page-home--finished .home, 
.page-home--finished .site-foot { opacity: 1; }</style>`)

var videoContent = 
'<video id="home-video" class="home-video" playsinline autoplay muted poster="/images/bg_home--lrg@2x.jpg">'+
  '<source src="video/curiousways.webm" type="video/webm" media="screen and (min-width:601px)">'+
  '<source src="video/curiousways.mp4" type="video/mp4" media="screen and (min-width:601px)">'+
  '<source src="video/curiousways_small.webm" type="video/webm" media="screen and (max-width:600px)">'+
  '<source src="video/curiousways_small.mp4" type="video/mp4" media="screen and (max-width:600px)">'+
'</video>';

document.getElementById("home-video-wrapper").innerHTML = videoContent;

var loadingVideo = document.getElementById("home-video");
var pageContent = document.getElementById("page-home");

loadingVideo.addEventListener('ended', function(e) {
	loadingVideo.classList.add("home-video--finished");
  pageContent.classList.remove('home-video--load');
  pageContent.classList.add("page-home--finished");
})