const submitBtn = document.querySelector('#submit');
const optionsEls = document.querySelectorAll('.options');
const containerEl = document.querySelector('.container');
const answersEl = document.querySelector('.answers');

submitBtn.addEventListener('click', () => {
    let resultHtml = '';
    optionsEls.forEach((option, index) => {
        const selectedOption = option.querySelector('input:checked');
        if (!selectedOption) {
            option.classList.add('error');
        } else {
            resultHtml += `
                <p>Вопрос ${index + 1}: ${selectedOption.value}</p>
            `;
        }
    });
    if (optionsEls.length === containerEl.querySelectorAll('input:checked').length) {
        answersEl.innerHTML = resultHtml;
        document.querySelector('.result').classList.remove('hidden');
    }
});

containerEl.addEventListener('click', ({ target }) => {
    if (target.closest('.options>label')) {
        target.closest('.options').classList.remove('error');
    }
});