function addLinks() {
	var y = document.getElementsByClassName('alg');
	var pref = 'https://alg.cubing.net/?type=alg&view=playback&alg=';
	var algs = [];
	var refs = [];
	var i;
	for(i = 0; i < y.length; i++) {
		algs[i] = y[i].innerHTML.replace(/ /g, '_').replace(/'/g, '-');
		refs[i] = pref + algs[i];
		y[i].href = refs[i];
	}
}

function rotations() {
	var pics = document.getElementsByClassName(picDiv);
	var lists = document.getElementsByClassName(listDiv);

	var imgPics = [];
	var listArray = [];
	for(var i = 0; i < pics.length; i++) {
		imgPics.push(pics[i].firstChild);
	}
	for(var i = 0; i < lists.length; i++) {
		var listChildren = lists[i].childNodes;
		var pArray = [];
		for(var j = 0; j < listChildren.length; j++) {
			pArray.push(listChildren[j]);
		}
		listArray.push(pArray);
	}
	console.log(imgPics);
	console.log(listArray);
}
