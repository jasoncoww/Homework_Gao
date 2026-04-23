function numOfDigits(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return 0; // Return 0 for non-integer inputs
    }
    return number.toString().length;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('#numberInput');
    const resultDisplay = document.querySelector('#result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const number = parseInt(input.value, 10);
        const digitCount = numOfDigits(number);
        resultDisplay.textContent = `Number of digits: ${digitCount}`;
    });
});