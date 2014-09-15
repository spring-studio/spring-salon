(function(){
	// preload hover images
	var imgUrls = [
	'images/depilacija_muski_hover.svg', 
	'images/depilacija_zene_hover.svg', 
	'images/exclusive_hover.svg',
	'images/feet_hover.svg', 
	'images/hand_hover.svg', 
	'images/lice_hover.svg', 
	'images/masaze_hover.svg', 
	'images/njega_leda_hover.svg', 
	'images/rodendan_hover.svg', 
	'images/standard_hover.svg', 
	'images/termo_deka_hover.svg'];
	var imgs = [];
	for(var i in imgUrls){
		imgs.push(new Image());
		imgs[i].src = imgUrls[i];
	}
})();





