function linker() {
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
