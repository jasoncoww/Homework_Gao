function reverseString(str) {
    return str
        .trim()
        .split(/\s+/)
        .reverse()
        .join(' ');
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputWord');
    const btn = document.getElementById('reverseBtn');
    const output = document.getElementById('output');

    const reverseString = s => s.split('').reverse().join('');

    btn.addEventListener('click', () => {
        output.textContent = reverseString(input.value || '');
    });

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') output.textContent = reverseString(input.value || '');
    });
});