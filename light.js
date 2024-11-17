// Initial brightness and DOM elements
let brightness = 100;
const bulb = document.getElementById('bulb');
const increaseBrightness = document.getElementById('increase-brightness');
const decreaseBrightness = document.getElementById('decrease-brightness');
const colorPicker = document.getElementById('color-picker');

// Update bulb brightness
function updateBrightness() {
    bulb.style.filter = `brightness(${brightness}%)`;
}

// Increase brightness handler
increaseBrightness.addEventListener('click', () => {
    if (brightness < 200) { // Max brightness 200%
        brightness += 10;
        updateBrightness();
    }
});

// Decrease brightness handler
decreaseBrightness.addEventListener('click', () => {
    if (brightness > 10) { // Min brightness 10%
        brightness -= 10;
        updateBrightness();
    }
});

// Change bulb color
colorPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    bulb.querySelector('.bulb-icon').style.color = color;
});
