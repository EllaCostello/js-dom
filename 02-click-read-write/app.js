
// Intro DOM Exercise
// ==================
// 1. When #showBtn is clicked trigger handleShowClick
// 2. Retrieve all paragraphs with class "msg" and id "message".
// 3. Show the combined (concatenated) text content of all these elements in #output.

window.addEventListener("load", initApp);

function initApp() {
	// TODO: Add event listener to #showBtn
	const button = document.querySelector("#showBtn");
	button.addEventListener('click', (handleShowClick));
}

function handleShowClick() {
	// TODO: Read and show the combined text in #output
	/*let messages = document.querySelectorAll(".msg");

	let result = "";

	for (let i = 0; i < messages.length; i++) {
		result += messages[i].textContent + " ";
	}

	document.getElementById("output").textContent = result;
	alert(document.getElementById("output").textContent);
	*/

	const output = document.querySelector("#output");
	const msgs = document.querySelectorAll(".msg");
	let combined = document.querySelector("#message").textContent;

	for (const m of msgs) {
		combined += " " + m.textContent;
	}

	output.textContent = combined;
}
