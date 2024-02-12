var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

document.querySelector('.img1').setAttribute('src', './images/dice' + String(randomNumber1) + '.png');
document.querySelector('.img2').setAttribute('src', './images/dice' + String(randomNumber2) + '.png');

if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').textContent = 'Draw';
} else {
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').textContent = 'Player 1 Wins!'
    } else {
        document.querySelector('h1').textContent = 'Player 2 Wins!'
    }
}