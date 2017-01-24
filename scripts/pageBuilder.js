var MAX_HOR_CELLS = 6;
var MIN_HOR_CELLS = 2;
var horIdx = 0;
var tableName = "cmllAlgs";

var testCmll = cmllObjs[0];

function buildPage() {
	document.body.innerHTML = "<table id='"+tableName+"'></table>";
	document.getElementById(tableName).innerHTML = createTable();
}

function createTable() {
    var horCells = Math.floor(window.innerWidth/350);

    if(horCells > MAX_HOR_CELLS) {
        horCells = MAX_HOR_CELLS;
    }
    if(horCells < MIN_HOR_CELLS) {
        horCells = MIN_HOR_CELLS;
    }

	var closeTr = "</tr>";
	var closeTd = "</td>";

	var tableString = "";

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var letterIdx;

	for(var i = 0; i < cmllObjs.length; i++) {
        var newRow = false;
        var currChar = cmllObjs[i].name.substr(0, 1);
        var nextChar;
        if(i+1 < cmllObjs.length) {
            nextChar = cmllObjs[i+1].name.substr(0, 1);
        }

        if(currChar != nextChar) {
            newRow = true;
        }

        if(horIdx%horCells === 0) {
			tableString += "<tr>";
		}
		tableString += "<td>"+createCell(cmllObjs[i].name, cmllObjs[i].algList)+closeTd;
		if((horIdx%horCells == horCells-1) || newRow) {
			tableString += closeTr;
		}
        if(newRow) {
            horIdx = 0;
        } else {
            horIdx++;
        }
	}
	return tableString;
}

function createCell(name, algs) {
	var closeDiv = "</div>";
    var closeH3 = "</h4>"
	var closeP = "</p>";

	var openA = "<a class='alg' href='' target='_blank'>";
	var closeA = "</a>";


	var cellString = "<div class='cmllContainer'>" +
					 "<div class='algName'>" +
					 "<h4>"+name+closeP+closeDiv +
					 "<div class='algPic'>" +
					 "<img src='images/"+name+".png' alt="+name+" picture />"+closeDiv +
					 "<div class='algList'>";

	var algsString = "";
	for(var i = 0; i < algs.length; i++) {
		algsString += "<p class='algText'>"+openA+algs[i]+closeA+closeP;
	}

	return cellString + algsString + closeDiv;
}
