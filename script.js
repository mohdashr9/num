const secretNumber = Math.floor(Math.random() * 21);
const guessInput = document.getElementById('guessInput');
const result = document.getElementById('result');
const score = document.getElementById('score');
let userScore = 0;

function checkGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 0 || guess > 20) {
        result.textContent = 'Invalid input. Please enter a number between 0 and 20.';
        result.style.color = 'red';
    } else if (guess === secretNumber) {
        result.textContent = 'Congratulations! You guessed the correct number.';
        result.style.color = 'green';
        userScore++;
        score.textContent = userScore;
    } else if (guess < secretNumber) {
        result.textContent = 'Too low. Try again.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Too high. Try again.';
        result.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function submitName() {
    var nameInput = document.getElementById('nameInput');
    var name = nameInput.value;
    
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    
    showNotification('Welcome, ' + name + '!');
    closePopup();
}

function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    
    setTimeout(function() {
        hideNotification();
    }, 3000);
}

function hideNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'none';
}
function shareResult() {
    var result = "Hello I got this result with this site try it"; // قم بتعديل النص هنا
    var phoneNumber = "1234567890"; // قم بتعديل رقم الهاتف هنا

    var message = encodeURIComponent(result);
    var url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(url);
}
function checkNumber() {
    var numberInput = document.getElementById('numberInput');
    var number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0 || number > 20) {
        alert('Please enter a valid number between 0 and 20.');
    } else {
        alert('Number is valid: ' + number);
        // تنفيذ الإجراءات اللاحقة هنا
    }
}
