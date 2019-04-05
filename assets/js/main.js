/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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
	fadeMyDiv();
})

function fadeMyDiv() {
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
}