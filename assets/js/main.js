/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*DARK THEME ADDED*/
const moonpath="M32 69C32 107.108 71 138 71 138C31.7878 138 0 107.108 0 69C0 30.8924 31.7878 0 71 0C71 0 32 30.8924 32 69Z";
const sunpath="M142 69C142 107.108 110.212 138 71 138C31.7878 138 0 107.108 0 69C0 30.8924 31.7878 0 71 0C110.212 0 142 30.8924 142 69Z";
let toogle=false;
const darkmode=document.querySelector('.darkmodediv');

darkmode.addEventListener('click',()=>{
	let css=document.querySelector('#styles');
	css.href=toogle ? "assets/css/main.css":"assets/css/darkmain.css";
	let button=document.querySelector('.darkbtn');
	button.innerHTML=toogle ? "Dark Mode" : "Light Mode";
	button.className=toogle ?"btn darkbtn btn-dark":"btn darkbtn btn-info";


    const timeline=anime.timeline({
        duration:750,
        easing:'easeOutExpo'
    })
    .add({
        targets:'#sunpath',
        d:[
            {value:toogle ? sunpath :moonpath}
        ]
    })
    .add({
        targets:'#darkmodesvg',
        rotate:toogle?60:320
    },
	'-=350')
	// .add({
	// 	targets:'.darkbtn',
	// 	innerText:toogle ? "Dark Mode" : "Light Mode",
	// 	className:toogle ?"btn darkbtn btn-dark":"btn darkbtn btn-light"
	// },'-=700')

    if(!toogle){
        toogle=true;
    }
    else{
        toogle=false;
    }
});

/*DARK THEME FINISHED*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.
	var $nav = $('#nav');

	if ($nav.length > 0) {

		// Shrink effect.
		$main
			.scrollex({
				mode: 'top',
				enter: function () {
					$nav.addClass('alt');
				},
				leave: function () {
					$nav.removeClass('alt');
				},
			});

		// Links.
		var $nav_a = $nav.find('a');

		$nav_a
			.scrolly({
				speed: 1000,
				offset: function () {
					return $nav.height();
				}
			})
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$nav_a
					.removeClass('active')
					.removeClass('active-locked');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					initialize: function () {

						// Deactivate section.
						if (browser.canUse('transition'))
							$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($nav_a.filter('.active-locked').length == 0) {

							$nav_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000
	});

})(jQuery);


// Board member tab animation
var tabs = $(".tabs");
var selector = $(".tabs").find("a").length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
	left: activeItem.position.left + "px",
	width: activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
	e.preventDefault();
	$(".tabs a").removeClass("active");
	$(this).addClass("active");
	var activeWidth = $(this).innerWidth();
	var itemPos = $(this).position();
	$(".selector").css({
		left: itemPos.left + "px",
		width: activeWidth + "px"
	});
});


// TODO:Improve below code i.e., use function and pass element to be displayed in that
$("#title-current-board-desktop").on("click", function (e) {
	$('#current-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-ex-board-desktop").on("click", function (e) {
	$('#ex-board').fadeIn('slow');
	$("#current-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-advisory-board-mobile").on("click", function (e) {
	$('#advisory-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#current-board").fadeOut('fast');
});

$("#title-current-board-mobile").on("click", function (e) {
	$('#current-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-ex-board-mobile").on("click", function (e) {
	$('#ex-board').fadeIn('slow');
	$("#current-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-advisory-board-desktop").on("click", function (e) {
	$('#advisory-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#current-board").fadeOut('fast');
});

$(document).ready(function () {
	keepCurrentBoardDiv();

	if ($('#content-mobile').css('display') == 'block') {
		$("#title-current-board-mobile").click();

	} else {
		$("#title-current-board-desktop").click();
	}
})

function keepCurrentBoardDiv() {
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
}
