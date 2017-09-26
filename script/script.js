window.onload = function () {
	const emailForm = document.getElementById("emailForm");
	const optionsCheckboxes = document.getElementById("options");
	// function showOptions() {
	// 	optionsCheckboxes.style.display = "block";
	// 	console.log("showing options...");
	// }
	function init () {
		let switchId = optionsCheckboxes.querySelector("input[type=radio]:checked").id;
		let pp = document.getElementById("pp");
		let rekv = document.getElementById("rekv");
		switch(switchId) {
			case "checkbox1":
				pp.disabled = true;
				rekv.disabled = true;
				break;
			case "checkbox2":
			case "checkbox3":
			case "checkbox4":
				pp.disabled = false;
				rekv.disabled = false;
				break;
			case "checkbox5":
				pp.disabled = true;
				rekv.disabled = false;
				break;
		}
	}

	emailForm.rcptAddr.addEventListener("click", function() {
		optionsCheckboxes.style.display = "block";
		console.log("showing options...");
	});
	/*emailForm.senderAddr.addEventListener("click", showOptions());
	emailForm.senderName.addEventListener("click", showOptions());*/
	// console.log(init())
}