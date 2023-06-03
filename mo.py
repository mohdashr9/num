import random

secret_number = random.randint(0, 20)
user_score = 0

def check_guess():
    guess = input('Enter a number between 0 and 20: ')
    
    try:
        guess = int(guess)
        
        if guess < 0 or guess > 20:
            print('Invalid input. Please enter a number between 0 and 20.')
            check_guess()
        else:
            evaluate_guess(guess)
    except ValueError:
        print('Invalid input. Please enter a number between 0 and 20.')
        check_guess()

def evaluate_guess(guess):
    global user_score
    
    if guess == secret_number:
        print('Congratulations! You guessed the correct number.')
        user_score += 1
    elif guess < secret_number:
        print('Too low. Try again.')
        check_guess()
    else:
        print('Too high. Try again.')
        check_guess()

check_guess()
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    
    if name.strip() == '':
        return 'Please enter your name.'
    
    return 'Welcome, ' + name + '!'

if __name__ == '__main__':
    app.run()
