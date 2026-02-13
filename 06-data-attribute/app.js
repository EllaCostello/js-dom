window.addEventListener('load', initApp);

function initApp() {
	// TODO: Add event listener to #toggleBtn
    // Pass in the button element and the span to update
    // HINT: use () => handleToggle(btn, stateValueSpan) as the event handler
    const toggleBtn = document.getElementById("toggleBtn");
    const stateValueSpan = document.getElementById("stateValue");
    toggleBtn.addEventListener('click', () => handleToggle(toggleBtn, stateValueSpan));
}

function handleToggle(btn, stateValueSpan) {
    // TODO: get the attribute 'data-state' of btn
    // If it's 'off', change it to 'on'. If it's 'on', change it to 'off'.
    // Update the text content of stateValueSpan to show the current state.
    // Also, toggle the class 'on' on btn when state is 'on', remove it when 'off'.
    /*let dataState = btn.getAttribute("data-state");

    if (dataState === "off") {
        btn.setAttribute("data-state" = "on");
        btn.classList.add("on")
        btn.classList.remove("off");
        stateValueSpan.textContent = "on";

    } else {
        btn.setAttribute("data-state" = "off");
        btn.classList.add("off")
        btn.classList.remove("on");
        stateValueSpan.textContent = "off";
    }
    */

    const isOn = btn.getAttribute("data-state") === "on";
    const newState = isOn ? "off" : "on";

    btn.setAttribute("data-state", newState);
    btn.classList.toggle("on", newState === "on");
    stateValueSpan.textContent = newState;
}
