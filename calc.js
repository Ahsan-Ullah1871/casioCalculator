function ON() {
	document.getElementById("displayOn").value = "0";
	
}

document.getElementById("buttons").addEventListener("click", function (event) {
	let getValue = event.target.value;

	if (isNaN(getValue)) {
		if (getValue == "=") {
			let show = document.getElementById("displayOn").value;

			if (show == "") {
			} else {
				document.getElementById(
					"displayOff"
				).style.display = "block";
				var calculation = eval(
					document.getElementById("displayOn").value
				);
				document.getElementById(
					"displayOff"
				).value = calculation;
			}
		} else if (
			getValue == "+" ||
			getValue == "-" ||
			getValue == "*" ||
			getValue == "." ||
			getValue == "/"
		) {
			document.getElementById("displayOn").value += getValue;
			document.getElementById("displayOff").value = "";
		} else if (getValue == "AC") {
			document.getElementById("displayOn").value = "";
			document.getElementById("displayOff").value = "";
		} else if (getValue == "DEL") {
			let allSelect = document.getElementById("displayOn").value;
			let piece = allSelect.length;
			let lastNumber = allSelect.slice(0, piece - 1);
			document.getElementById("displayOn").value = lastNumber;
		}
	} else {
		let show = document.getElementById("displayOn").value;
		if (show == "0") {
			document.getElementById("displayOn").value = getValue;
		} else {
			document.getElementById("displayOn").value += getValue;
			document.getElementById("displayOff").value = "";
		}
	}
});
