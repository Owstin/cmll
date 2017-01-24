var cases = [];

var colonCount = 0;
for(var i = 0; i < cmllFullText.length; i++) {
    if(cmllFullText.charAt(i) == ":") {
        colonCount++;
    }
}

var prevPos = 0;
for(var i = 0; i < colonCount; i++) {
    var pos = cmllFullText.indexOf(":", prevPos);
    cases.push(cmllFullText.substr(pos-2, 2));
    prevPos = pos+1;
}

var cmlls = cmllFullText.split("\n");
var cmllObjs = [];
var caseIdx = 0;
var caseName;
var algs = [];
for(var i = 0; i < cmlls.length; i++) {
    if(cmlls[i].includes(cases[caseIdx])) {
        caseName = cases[caseIdx];
        caseIdx++;
    } else if(cmlls[i] === "") {
        cmllObjs.push({
            name: caseName,
            algList: algs
        });
        algs = [];
    } else {
        algs.push(cmlls[i]);
    }
}
