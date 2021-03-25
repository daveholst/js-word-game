//Score
const score = {
  wins: 0,
  losses: 0,
  getFromLocal: function () {
    localStorage.getItem('wins')
    localStorage.getItem('loses')
    console.log(`w: ${this.wins} l: ${this.losses}`);
  },
  setToLocal: function () {
    localStorage.setItem('wins', `${this.wins}`)
    localStorage.setItem('loses', `${this.losses}`)
  }
}

// Word list array
let wordList = ['JQuery', 'Node', 'array']

//Random Work Picker
let word = 'Electron'
let letterArray = word.split('');
let lettersSolved = [];
//Box Generator
function BoxGenerator(word) {
  let wordArray = word.split('');
  let count = 0;
  wordArray.forEach(element => {
    $('#wordboxes').append(`<span id=letter-${count} class=letter-box data-letter=${element}>`);
    count++;
  });
}

BoxGenerator('Electron');

//timer
const timer = {
  count: 15,
  startTimer: function() {
    this.timerId = setInterval(() => {
      this.count--;
      $('#timer').text(this.count)
      if (this.count <= 0) {
        this.stopTimer();
      };
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timerId);
  }
}

//key down event listener
$(document).keydown( (event) => {
  keyPressed = event.key;
  if (lettersSolved.length === 0) timer.startTimer();
  //check if it matches any of the data-letter attributes?
  for (let i = 0; i < letterArray.length; i++) {
    //start time if not started

    const letter = letterArray[i];
    //if key matches
    if (keyPressed === letter || keyPressed.toUpperCase() === letter) {
      //write data-letter atribute to correct span element
      $(`#letter-${i}`).text($(`#letter-${i}`).attr('data-letter'));
      lettersSolved.push(letter);
      //check if solved
      if (letterArray.length === lettersSolved.length) {
        //TODO: add solved function here ? - stop timer, update score
        timer.stopTimer();
        score.wins++;
        console.log('SOLVED!!!');
      }
    }
  }


  console.log(event)

})
