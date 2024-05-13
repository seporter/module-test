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
}
