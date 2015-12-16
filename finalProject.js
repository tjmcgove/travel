var mapDiv1=document.getElementById("map1");
var mapDiv2
var pinImageDiv=document.getElementById("pin-image");
var actualImage=pinImageDiv.firstElementChild

console.log(actualImage)

function displayImage(event){
	var selectedElement=event.target
	if(selectedElement.tagName==="IMG") {
		actualImage.src=selectedElement.parentElement.id+"Image.jpg"
	}
	console.log(selectedElement.tagName);
	console.log(selectedElement.parentElement.id);

}

mapDiv1.onclick=displayImage;


function makeYourOwn(event) {
	var selectedElement=event.target

}



