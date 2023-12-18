function askQuestion(answer, question) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
}

function puzzle() {
    askQuestion('елка', 'Зимой и летом одним цветом?');
    askQuestion('лук', 'Сидит дед во сто шуб одет?');
}