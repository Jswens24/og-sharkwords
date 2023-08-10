import './style.css';
import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word';
import setupGuesses from './src/guess';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;


const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord()
  const sharkImgEl = document.querySelector('#shark-img');
  const gameStatusEl = document.querySelector('#game-status');
  let guessedWord = document.querySelectorAll('.letter-box')

  setSharkImage(document.querySelector('#shark-img'), numWrong)
  setupWord(word, document.querySelector('#word-container'))

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.setAttribute('disabled', true)

    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong++
      setSharkImage(sharkImgEl, numWrong)
    }

    const isWordComplete = Array.from(document.querySelectorAll('.letter-box')).every(
      (el) => el.innerText !== '',
    );

    // Check for game over
    if (isWordComplete || numWrong === 5) {
      // Disable all the buttons
      document.querySelectorAll('button').forEach((btn) => {
        btn.setAttribute('disabled', true);
      });

      // Display the game status
      gameStatusEl.innerText = isWordComplete ? 'You win!' : 'You lose!';
    }

  }

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess)



  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);



};

initSharkwords();

