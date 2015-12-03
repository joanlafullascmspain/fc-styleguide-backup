$(function(){
	console.log("hola svg");
	var svg= $("svg");
	var symbol = svg.find("symbol");
	symbol.each(function(){
		var id= $(this).attr("id");
		var target= $("#iconList");
		var node = "<li><svg class='re-Icon'><use xlink:href='../assets/images/fotocasa.sprite.svg#" + id +"'></use></svg><span>#" + id + "</span></li>";
		target.append(node);

	});
});