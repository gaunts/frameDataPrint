document.body.style.border = "5px solid red";

var uselessHeaders = document.getElementsByClassName("note");
uselessHeaders[0].parentNode.removeChild(uselessHeaders[0]);
uselessHeaders[0].parentNode.removeChild(uselessHeaders[0]);

var emptyCells = document.getElementsByClassName("blank")
for (var i = 0; i < emptyCells.length; i++) {
	emptyCells[i].style.background = "#ffffff"
}

var tables = document.getElementsByClassName("frameTbl");

var table_vt2 = tables[1];

var lines = table_vt2.children[0].children;
for (var i = 0; i < lines.length; i++) 
{
	var line = lines[i];
	var cells = line.children;
	console.log(i + " : " + cells.length);

	if (cells.length == 16)
	{
		var onHit = cells[6];
		var onBlock = cells[7];
		// if (onHit)
		// onHit.innerHTML = "32";
		// onBlock.innerHTML = "55";
	}
}