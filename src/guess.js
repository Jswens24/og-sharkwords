const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  //splitting alphabet string into array and looping
  alphabet.split('').forEach((letter) => {
    //creating a button for each letter
    const btn = document.createElement('button');
    //updates text of each button
    btn.innerText = letter;
    //adds click event to handleGuess function
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    element.append(btn);
  });
}

export default setupGuesses;
