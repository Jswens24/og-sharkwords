let word;

export function setupWord(initWord, element) {
    word = initWord;

    initWord.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`)
    })
}

export function isLetterInWord(letter) {
    return word.includes(letter)
}

export function revealLetterInWord(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, index) => {
        if (wordLetter === letter) {
            letterBoxes[index].innerHTML = letter;
        }
    })
}


