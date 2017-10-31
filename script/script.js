window.onload = function () {
	const emailForm = document.getElementById("emailForm");
	const optionsCheckboxes = document.getElementById("options");
	const results = document.getElementById("results");
	const radios = optionsCheckboxes.querySelectorAll(".checkbox");
	const rekvEnable = document.getElementById("rekvEnable");
	const rekv = document.getElementById("rekv");
	const pp = document.getElementById("pp");
	const closeBtn = document.getElementById("closeButton");
	const timerText = document.querySelector(".timer");

	function showOptions(element) {
		element.style.display = "block";
		if (element.id = rekv) {
			element.required = true;
			element.disabled = false;
		}
		console.log("showing...");
	}
	function hideOptions(element) {
		element.style.display = "none";
		if (element.id = rekv) {
			element.required = false;
			element.disabled = true;
		}
		console.log("hiding...");
	}
	function init() {
		let switchId = optionsCheckboxes.querySelector(".checkbox:checked").id;
		rekvEnable.checked = false;
		hideOptions(rekv);
		switch(switchId) {
			case "checkbox1":
				pp.disabled = true;
				rekvEnable.disabled = true;
				rekvEnable.checked = false;
				break;
			case "checkbox2":
			case "checkbox3":
			case "checkbox4":
				pp.disabled = false;
				rekvEnable.disabled = false;
				break;
			case "checkbox5":
				pp.disabled = true;
				rekvEnable.disabled = false;
				break;
		}
	}
	function enablingOfRekvTextarea() {
		if (rekvEnable.checked) {
			showOptions(rekv);
		} else {
			hideOptions(rekv);
		}
	}

	let timerId;
	function showResults() {
		hideOptions(optionsCheckboxes);
		showOptions(timerText);
		showOptions(results);
		timerId = setTimeout(function() {
			hideOptions(results);
			hideOptions(timerText);
		}, 10000);
	}
	function resetForm() {
		pp.disabled = true;
		hideOptions(rekv);
		hideOptions(optionsCheckboxes);
		clearTimeout(timerId);
		hideOptions(results);
		hideOptions(timerText);
	}
	emailForm.rcptAddr.addEventListener("click", function() {
		showOptions(optionsCheckboxes);
		clearTimeout(timerId);
		hideOptions(results);
		hideOptions(timerText);
	});
	emailForm.senderAddr.addEventListener("click", function() {
		showOptions(optionsCheckboxes);
		clearTimeout(timerId);
		hideOptions(results);
		hideOptions(timerText);
	});
	emailForm.senderName.addEventListener("click", function() {
		showOptions(optionsCheckboxes);
		clearTimeout(timerId);
		hideOptions(results);
		hideOptions(timerText);
	});

	for (let i = 0; i < radios.length; i++) {
		radios[i].addEventListener("click", init);
	}
	rekvEnable.addEventListener("change", enablingOfRekvTextarea);
	emailForm.addEventListener("submit", function() {
		clearTimeout(timerId);
		showResults();
	});
	emailForm.addEventListener("reset", resetForm);
	closeBtn.addEventListener("click", function() {
		hideOptions(optionsCheckboxes);
	});
}