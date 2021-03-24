
// Word list array
let wordList = ['JQuery', 'Node', 'array']

//Word Generator


function wordGenerator(word) {
  let wordArray = word.split('');
  let count = 0;
  wordArray.forEach(element => {
    $('#wordboxes').append(`<span id=letter-${count} class=letter-box data-letter=${element}>`);
    count++;
  });
}

wordGenerator('Electron');

$(document).keydown( (event) => {
  keyPressed = event.key;
  //check if it matches any of the data-letter attributes?



  console.log(event)

})
