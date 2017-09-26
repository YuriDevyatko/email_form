window.onload = function () {
	const emailForm = document.getElementById("emailForm");
	const optionsCheckboxes = document.getElementById("options");
	const radios = optionsCheckboxes.querySelectorAll(".checkbox");
	function showOptions(element) {
		element.style.display = "block";
		console.log("showing...");
	}
	function hideOptions(element) {
		element.style.display = "none";
		console.log("hiding...");
	}
	function init () {
		let switchId = optionsCheckboxes.querySelector(".checkbox:checked").id;
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
		showOptions(optionsCheckboxes);
	});
	emailForm.senderAddr.addEventListener("click", function() {
		showOptions(optionsCheckboxes);
	});
	emailForm.senderName.addEventListener("click", function() {
		showOptions(optionsCheckboxes);
	});

	for (let i = 0; i < radios.length; i++) {
		radios[i].addEventListener("click", init);
	}
}