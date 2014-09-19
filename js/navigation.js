var $w = $(window);
var $subLink1 = $('.linkTretmani');
	jQuery.extend($subLink1, { isBound : false, arrow : $('.arrow'), subMenu : $('.subMenu') });
var $subLink2 = $('.linkWellness');
	jQuery.extend($subLink2, { isBound : false, arrow : $('.arrow2'), subMenu : $('.subMenu2') });
var $nav = $('.navigationLinks');
	jQuery.extend($nav, { isFixed : false, homeY : $nav.offset().top });


function isMobileWidth(){
    return $(window).width() < 750;
}

function bindSubMenuClickEvent($subLink){
	$subLink.isBound = true;
	$subLink.click(function(event) {
		event.stopPropagation();
		$subLink.arrow.toggleClass('transitionArrow');
		$subLink.subMenu.toggleClass('transitionSubMenu');
	});

}

function unbindSubMenuClickEvent($subLink){
	$subLink.isBound = false;
	$subLink.unbind('click');
	$subLink.arrow.removeClass('transitionArrow');
	$subLink.subMenu.removeClass('transitionSubMenu');
}

function checkShouldNavFloat(){
		var shouldBeFixed =  $w.scrollTop() > $nav.homeY;

		if( shouldBeFixed && !$nav.isFixed ){
			$nav.css({position : 'fixed', top : 0});
			$nav.isFixed = true;
			if(!isMobileWidth()){
				$subLink1.subMenu.css({position : 'fixed'});
				$subLink2.subMenu.css({position : 'fixed'});
			}
		}
		else if (!shouldBeFixed && $nav.isFixed ){
			$nav.css({position : ''});
			$nav.isFixed = false;
			$subLink1.subMenu.css({position : ''});
			$subLink2.subMenu.css({position : ''});
		}
}

function bindAllMobileEvents(){
	bindSubMenuClickEvent($subLink1);
	bindSubMenuClickEvent($subLink2);
	// close the navigation if clicked outside 
	 $('.navigationLinksWrapper').click(function(){
	  $nav.toggleClass('transitonNavigationLinks');
	  $('.navigationLinksWrapper').toggleClass('navigationLinksWrapperOpacity');
	});

}
function unbindAllMobileEvents(){
	unbindSubMenuClickEvent($subLink1);
	unbindSubMenuClickEvent($subLink2);
	$('.navigationLinksWrapper').unbind('click');
}
$(document).ready(function(){
	$('#menuImg').click(function(){
	  $nav.toggleClass('transitonNavigationLinks');
	  $('.navigationLinksWrapper').toggleClass('navigationLinksWrapperOpacity');
	});
	
	// animate submenues and arrow for mobile-width window
	if (isMobileWidth() && !$subLink1.isBound){
		bindAllMobileEvents();
	}

	//float the navigation on top upon scroll
	$w.scroll(checkShouldNavFloat);

});

$(window).resize(function(){
	if (isMobileWidth()){
		//fix the submenu navigation if needed
		$subLink1.subMenu.css({position : ''});
		$subLink2.subMenu.css({position : ''});
		if (!$subLink1.isBound ){
			bindAllMobileEvents();
		}
	}else{
		if($w.scrollTop() > $nav.homeY ){
			$subLink1.subMenu.css({position : 'fixed'});
			$subLink2.subMenu.css({position : 'fixed'});
		}
		if ( $subLink1.isBound ){
			unbindAllMobileEvents();
		}
	}

});