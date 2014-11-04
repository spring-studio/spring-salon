(function(){
	// preload hover images
	var imgUrls = [
	'images/depilacija_muski', 
	'images/depilacija_zene', 
	'images/exclusive',
	'images/feet', 
	'images/hand', 
	'images/lice', 
	'images/masaze', 
	'images/njega_leda', 
	'images/rodendan', 
	'images/standard', 
	'images/termo_deka',];
	var imgs = [];
	for(var i in imgUrls){
		imgs.push(new Image());
		imgs[imgs.length-1].src = imgUrls[i] +'_hover.svg';
		imgs.push(new Image());
		imgs[imgs.length-1].src = imgUrls[i] +'_submenu.svg';
	}
})();





