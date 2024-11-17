// document.querySelectorAll('.switch input').forEach(toggle => {
//     toggle.addEventListener('change', function () {
//         const colorPicker = this.closest('.control').querySelector('.color-picker input');
//         colorPicker.disabled = !this.checked; // Enable color picker when switch is on
//     });
// });



//                         // JavaScript to enable/disable the color picker
// function toggleColorPicker() {
//     const colorPicker = document.getElementById('color');
//     const toggle = document.getElementById('toggle-color-picker');
//     colorPicker.disabled = !toggle.checked; // Enable color picker only if toggle is checked
// }

// // Function to handle device state changes
// function updateDeviceState(deviceId, deviceName) {
//     const device = document.getElementById(deviceId);
//     const colorPicker = document.getElementById('bulb-color');

//     if (device.checked) {
//         console.log(`${deviceName} is turned ON`);
//         if (deviceId === 'bulb-toggle') {
//             colorPicker.disabled = false; // Enable color picker for Light Bulb
//         }
//     } else {
//         console.log(`${deviceName} is turned OFF`);
//         if (deviceId === 'bulb-toggle') {
//             colorPicker.disabled = true; // Disable color picker for Light Bulb
//         }
//     }
// }




const temperatureDisplay = document.getElementById('temperature');
        const increaseTempButton = document.getElementById('increase-temp');
        const decreaseTempButton = document.getElementById('decrease-temp');

        let currentTemperature = 24; // Initial temperature

        increaseTempButton.addEventListener('click', () => {
            if (currentTemperature < 32) { // Max temperature limit
                currentTemperature++;
                temperatureDisplay.textContent = `${currentTemperature}°C`;
            }
        });

        decreaseTempButton.addEventListener('click', () => {
            if (currentTemperature > 16) { // Min temperature limit
                currentTemperature--;
                temperatureDisplay.textContent = `${currentTemperature}°C`;
            }
        });







        
    // Initial fan speed value
let fanSpeed = 1;

// DOM elements for display and controls
const speedDisplay = document.getElementById('speed');
const increaseSpeedButton = document.getElementById('increase-speed');
const decreaseSpeedButton = document.getElementById('decrease-speed');

// Update the displayed fan speed
function updateSpeedDisplay() {
    speedDisplay.textContent = fanSpeed + 'x'; // Update with "1x", "2x", etc.
}

// Increase speed handler
increaseSpeedButton.addEventListener('click', () => {
    if (fanSpeed < 5) { // Assuming max speed is 5
        fanSpeed++;
        updateSpeedDisplay();
    }
});

// Decrease speed handler
decreaseSpeedButton.addEventListener('click', () => {
    if (fanSpeed > 1) { // Assuming min speed is 1
        fanSpeed--;
        updateSpeedDisplay();
    }
});

// Initialize the display with default speed
updateSpeedDisplay();
