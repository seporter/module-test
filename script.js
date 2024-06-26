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

let openedSections = 0;
const totalSections = document.querySelectorAll('.accordion-item').length;

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        if (!button.classList.contains('active')) {
            button.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            openedSections++;
        } else {
            button.classList.remove('active');
            panel.style.maxHeight = null;
            openedSections--;
        }

        // Check if all sections are opened
        if (openedSections === totalSections) {
            document.querySelector('.quiz').style.display = 'block';
        } else {
            document.querySelector('.quiz').style.display = 'none';
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
