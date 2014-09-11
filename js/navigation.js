var $w   = $(window);
var $arrow1 = $('.arrow');
	jQuery.extend($arrow1, { isBound : false, subMenu : $('.subMenu') });
var $arrow2 = $('.arrow2');
	jQuery.extend($arrow2, { isBound : false, subMenu : $('.subMenu2') });
var $nav = $('.navigationLinks');
	jQuery.extend($nav, { isFixed : false, homeY : $nav.offset().top });



function isMobileWidth(){
    return $(window).width() < 750;
}

function bindArrowClickEvent($arrow){
	$arrow.isBound = true;
	$arrow.click(function() {
		$arrow.toggleClass('transitionArrow');
		$arrow.subMenu.toggleClass('transitionSubMenu');
	});
}

function unbindArrowClickEvent($arrow){
	$arrow.isBound = false;
	$arrow.unbind('click');
	$arrow.removeClass('transitionArrow');
	$arrow.subMenu.removeClass('transitionSubMenu');
}

function checkShouldNavFloat(){
		var shouldBeFixed =  $w.scrollTop() > $nav.homeY;

		if( shouldBeFixed && !$nav.isFixed ){
			$nav.css({position : 'fixed', top : 0});
			$nav.isFixed = true;
			if(!isMobileWidth()){
				$arrow1.subMenu.css({position : 'fixed'});
				$arrow2.subMenu.css({position : 'fixed'});
			}
		}
		else if (!shouldBeFixed && $nav.isFixed ){
			$nav.css({position : ''});
			$nav.isFixed = false;
			$arrow1.subMenu.css({position : ''});
			$arrow2.subMenu.css({position : ''});
		}
}

$(document).ready(function(){
	$('#menuImg').click(function(){
	  $nav.toggleClass('transitonNavigationLinks');
	});
	
	// animate submenues and arrow for mobile-width window
	if (isMobileWidth() && !$arrow1.isBound){
		bindArrowClickEvent($arrow1);
		bindArrowClickEvent($arrow2);
	}

	//float the navigation on top upon scroll
	$w.scroll(checkShouldNavFloat);

});

$(window).resize(function(){
	if (isMobileWidth()){
		//fix the submenu navigation if needed
		$arrow1.subMenu.css({position : ''});
		$arrow2.subMenu.css({position : ''});
		if (!$arrow1.isBound ){
			bindArrowClickEvent($arrow1);
			bindArrowClickEvent($arrow2);
		}
	}else{
		if($w.scrollTop() > $nav.homeY ){
			$arrow1.subMenu.css({position : 'fixed'});
			$arrow2.subMenu.css({position : 'fixed'});
		}
		if ( $arrow1.isBound ){
			unbindArrowClickEvent($arrow1);
			unbindArrowClickEvent($arrow2);
		}
	}

});