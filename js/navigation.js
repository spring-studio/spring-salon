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
	$('#menuImg').click(function(){
	  $('.navigationLinks').toggleClass('transitonNavigationLinks');
	});
	
	if (isMobileWidth() && !$arrow1.isBound){
		bindArrowClickEvent($arrow1);
		bindArrowClickEvent($arrow2);
	}
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