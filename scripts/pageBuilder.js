var MAX_HOR_CELLS = 2;
var horCells = 0;
var tableName = "cmllAlgs";

var testCmll = cmllObjs[0];

function buildPage() {
	document.body.innerHTML = "<table id='"+tableName+"'></table>";
	document.getElementById(tableName).innerHTML = createTable();
}

function createTable() {
	var closeTr = "</tr>";
	var closeTd = "</td>";

	var tableString = "";

	for(var i = 0; i < cmllObjs.length; i++) {
		if(horCells%MAX_HOR_CELLS === 0) {
			tableString += "<tr>";
		}
		tableString += "<td>"+createCell(cmllObjs[i].name, cmllObjs[i].algList)+closeTd;
		if(horCells%MAX_HOR_CELLS == MAX_HOR_CELLS-1) {
			tableString += closeTr;
		}
		horCells++;
	}
	return tableString;
}

function createCell(name, algs) {
	var closeDiv = "</div>";
	var closeP = "</p>";

	var openA = "<a class='alg' href='' target='_blank'>";
	var closeA = "</a>";


	var cellString = "<div class='cmllContainer'>" +
					 "<div class='algName'>" +
					 "<p>"+name+closeP+closeDiv +
					 "<div class='algPic'>" +
					 "<img src='images/"+name+".png' alt="+name+" picture />"+closeDiv +
					 "<div class='algList'>";

	var algsString = "";
	for(var i = 0; i < algs.length; i++) {
		algsString += "<p class='algText'>"+openA+algs[i]+closeA+closeP;
	}

	return cellString + algsString + closeDiv;
}
