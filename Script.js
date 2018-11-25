function submitAction(form) {
	var name = document.getElementById("name");
	var piceOfBody = document.getElementById("piceOfBody");
	var tool = document.getElementById("tool");
	console.log(name, piceOfBody , tool);
	name.innerHTML = form.nameInput.value;
	piceOfBody.innerHTML = form.bodyPice.value;
	tool.innerHTML = form.Tools.value;

	//document.location.href="Story.html";
	//alert("Здрасте,"+ form.nameInput.value);
}