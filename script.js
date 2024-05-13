// script.js

function showResult(question, answer) {
    const resultDiv = document.getElementById(question);
    if (answer === 'correct') {
        resultDiv.innerHTML = 'Correct!';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.innerHTML = 'Incorrect!';
        resultDiv.style.color = 'red';
    }
    resultDiv.style.display = 'block';
    resultDiv.classList.add('animated', 'fadeIn');
}

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const panel = button.nextElementSibling;
        if (button.classList.contains('active')) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
            panel.style.maxHeight = null;
        }
    });
});

document.querySelectorAll('.quiz-question button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});
