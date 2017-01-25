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

function addRotations() {
	var pics = document.getElementsByClassName(picDiv);
	var lists = document.getElementsByClassName(listDiv);

	var imgPics = [];
	var listArrays = [];
	for(var i = 0, n = pics.length; i < n; i++) {
		imgPics.push(pics[i].firstChild);
	}
	for(var i = 0, n = lists.length; i < n; i++) {
		var listChildren = lists[i].childNodes;
		var pArray = [];
		for(var j = 0, m = listChildren.length; j < m; j++) {
			pArray.push(listChildren[j].firstChild);
		}
		listArrays.push(pArray);
	}

	var pos = 3;
	var testImg = imgPics[pos];
	var testAlgs = listArrays[pos];

	for(var i = 0, n = imgPics.length; i < n; i++) {
		for(var j = 0, m = listArrays[i].length; j < m; j++) {
			rotator(listArrays[i][j], imgPics[i]);
		}
	}
}

function rotator(p, img) {
	var text = p.innerText;
	var move = text.substr(0, text.search(/ /));
	var degrees = "rotate(0deg)";
	var speed = "100ms";

	var acceptedMove = move.substr(0,1) == "(";

	if(acceptedMove) {
		if(move == "(U)") {
			degrees = "rotate(90deg)";
		} else if(move == "(U')") {
			degrees = "rotate(-90deg)";
		} else if(move == "(U2)") {
			degrees = "rotate(180deg)";
			speed = "200ms";
		} else {
			degrees = "rotate(-180deg)";
			speed = "200ms";
		}
	}

	p.onmouseover = function() {
		img.style.transform = degrees;
		img.style.transition = speed;
	}
	p.onmouseleave = function() {
		img.style.transform = "rotate(0deg)";
		img.style.transition = speed;
	}
}
