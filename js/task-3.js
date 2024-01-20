document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', function () {
        const enterName = nameInput.value.trim();
        if (enterName === '') {
            nameOutput.textContent = 'Anonymous'
        } else { nameOutput.textContent = enterName;
        }
    })
})