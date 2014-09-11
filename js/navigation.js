var $arrow1 = $('.arrow');
	jQuery.extend($arrow1, { isBound : false, subMenu : $('.subMenu') });
var $arrow2 = $('.arrow2');
	jQuery.extend($arrow2, { isBound : false, subMenu : $('.subMenu2') });


function isMobileWidth(){
    return $(window).width() < 750;
}

function bindArrowClickEvent($arrow){
	$arrow.isBound = true;
	$arrow.click(function() {
		$arrow.subMenu.toggleClass('transitionSubMenu');
		$arrow.toggleClass('transitionArrow');
	});
}

$(document).ready(function(){
	var $w   = $(window);
	var $nav = $('.navigationLinks');
	jQuery.extend($nav, { isFixed : false, homeY : $nav.offset().top });

	$('#menuImg').click(function(){
	  $nav.toggleClass('transitonNavigationLinks');
	});
	
	// animate asubmenues and arrow for mobile-width window
	if (isMobileWidth() && !$arrow1.isBound){
		bindArrowClickEvent($arrow1);
		bindArrowClickEvent($arrow2);
	}

	//pop the navigation on top uopn scroll
	$w.scroll(function(){
		var shouldBeFixed =  $w.scrollTop() > $nav.homeY;
		if( shouldBeFixed && !$nav.isFixed ){
			$nav.css({position : 'fixed', top : 0});
			$nav.isFixed = true;
		}
		else if (!shouldBeFixed && $nav.isFixed ){
			$nav.css({position : ''});
			$nav.isFixed = false;
		}
	});

});

$(window).resize(function(){
	if (isMobileWidth() && !$arrow1.isBound ){
		bindArrowClickEvent($arrow1);
		bindArrowClickEvent($arrow2);
	}
	else if (!isMobileWidth() && $arrow1.isBound ){
		$arrow1.unbind('click');
		$arrow1.isBound = false;

		$arrow2.unbind('click');
		$arrow2.isBound = false;
	}

});