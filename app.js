// Buttons and Controls
const wifi = document.getElementById("toggle-wifi");
const bluetooth = document.getElementById("toggle-bluetooth");
const airdrop = document.getElementById("toggle-airdrop");
const donotdisturb = document.getElementById("toggle-donotdisturb");

const displaySlider = document.getElementById("display-range");
const audioSlider = document.getElementById("audio-range");

const labelWifi = document.getElementById("label-wifi");
const labelBluetooth = document.getElementById("label-bluetooth");
const labelAirdrop = document.getElementById("label-airdrop");

// * * *

// Helper function
function toggleControl(passedElement) {
  let toggleIsActive = false; // default

  if (passedElement.classList.contains("toggle-active")) {
    passedElement.classList.remove("toggle-active");
  } else {
    passedElement.classList.add("toggle-active");
    toggleIsActive = true;
  }

  return toggleIsActive;
}

// * * *

// Event Listeners

// Toggles
wifi.addEventListener("click", (event) => {
  // Change the subheader/label if active or not
  toggleControl(wifi) === true
    ? (labelWifi.innerText = "Home")
    : (labelWifi.innerText = "Off");
});

bluetooth.addEventListener("click", (event) => {
  toggleControl(bluetooth) === true
    ? (labelBluetooth.innerText = "Active")
    : (labelBluetooth.innerText = "Off");
});

airdrop.addEventListener("click", (event) => {
  toggleControl(airdrop) === true
    ? (labelAirdrop.innerText = "Contacts O...")
    : (labelAirdrop.innerText = "Disabled");
});

donotdisturb.addEventListener("click", (event) => {
  toggleControl(donotdisturb);
});

// Sliders
displaySlider.addEventListener("change", (event) => {
  console.log(`Display Slider value was changed to: ${displaySlider.value}.`);
});
audioSlider.addEventListener("change", (event) => {
  console.log(`Audio Slider value was changed to: ${audioSlider.value}.`);
});
