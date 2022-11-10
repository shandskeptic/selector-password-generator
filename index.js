let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(len) {
	var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";

	if (upperAlphabet.checked) {
		lowerAlphabet = lowerAlphabet.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	}

	if (symbol.checked) {
		lowerAlphabet = lowerAlphabet.concat("!@#$%^&*");
	}

	if (numeric.checked) {
		lowerAlphabet = lowerAlphabet.concat("0123456789");
	}

	let generator = "";
	for (let index = 0; index < len; index++) {
		generator += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
	}
	return generator;
}

function getPassword() {
	const newPassword = generatePassword(passwordLength.value);
	password.value = newPassword;
}

function savePassword() {
	password.value;
	saveButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`Password: ${password.value}`));
	saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
	alert("Save: " + password.value);
}

function copyPassword() {
	let password = document.getElementById("password");
	password.select();
	password.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(password.value);

	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + password.value;
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
