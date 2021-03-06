// var wordList = ['puzzled', 'cat', 'hardest', 'bottles', 'laptops', 'tinfoil', 'cracker',
// 'unknown', 'planter', 'message', 'unicorn', 'cup', 'mouse', 'tail', 'ball', 'noon']
// var pickRandomWord = Math.floor(Math.random() * (wordList.length))
// var randomWord = wordList[pickRandomWord]
// var numSlots = randomWord.length
// console.log(randomWord)

var imageCount = 2
var arrayOfWrongLetters = []
var numSlots = 0
var randomWord = ''

window.onload = function () {
  // document.getElementById('slot3').style.display = 'none'
  $('onclick').disabled = true
  $.get('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    {}, function (newWord) {
      randomWord = newWord[0].word
      $('onclick').disabled = false
      console.log(newWord[0].word)
      console.log(newWord[0].word.length)
      numSlots = newWord[0].word.length
      if (numSlots > 11) {
        var warning = document.getElementById('wordLength')
        warning.innerHTML = 'The word is too long. Refresh the page!'
        warning.style.color = 'red'
        $("[onclick]").removeAttr("onclick")
      } else {
        document.getElementById('wordLength').innerHTML = 'The word contains ' + numSlots + ' letters.' +
        ' Ignore the last ' + (11 - numSlots) + ' slot(s).'
      }
    })
}

var slot0 = false
var slot1 = false
var slot2 = false
var slot3 = false
var slot4 = false
var slot5 = false
var slot6 = false
var slot7 = false
var slot8 = false
var slot9 = false
var slot10 = false

var takeUserGuess = ''

function changeText (letter) {
  takeUserGuess = letter.toUpperCase()
  document.getElementById(letter).style.cssText = 'color: white'
  playGame()
}

function inputText (letter) {
  var input = document.getElementById("textbox").value
  console.log(input)
  // takeUserGuess = letter.toUpperCase()
  // this.style.cssText = 'color: white'
  // document.getElementById('textbox').style.backgroundColor = 'red'
  playGame()
}

function playGame () {
  if (takeUserGuess === randomWord.charAt(0).toUpperCase()) {
    var getSlot0 = document.getElementById('slot0')
    getSlot0.innerHTML = takeUserGuess
    slot0 = true
  }

  if (takeUserGuess === randomWord.charAt(1).toUpperCase()) {
    var getSlot1 = document.getElementById('slot1')
    getSlot1.innerHTML = takeUserGuess
    slot1 = true
  }

  if (takeUserGuess === randomWord.charAt(2).toUpperCase()) {
    var getSlot2 = document.getElementById('slot2')
    getSlot2.innerHTML = takeUserGuess
    slot2 = true
  }

  if (takeUserGuess === randomWord.charAt(3).toUpperCase()) {
    var getSlot3 = document.getElementById('slot3')
    getSlot3.innerHTML = takeUserGuess
    slot3 = true
  }

  if (takeUserGuess === randomWord.charAt(4).toUpperCase()) {
    var getSlot4 = document.getElementById('slot4')
    getSlot4.innerHTML = takeUserGuess
    slot4 = true
  }

  if (takeUserGuess === randomWord.charAt(5).toUpperCase()) {
    var getSlot5 = document.getElementById('slot5')
    getSlot5.innerHTML = takeUserGuess
    slot5 = true
  }

  if (takeUserGuess === randomWord.charAt(6).toUpperCase()) {
    var getSlot6 = document.getElementById('slot6')
    getSlot6.innerHTML = takeUserGuess
    slot6 = true
  }

  if (takeUserGuess === randomWord.charAt(7).toUpperCase()) {
    var getSlot7 = document.getElementById('slot7')
    getSlot7.innerHTML = takeUserGuess
    slot7 = true
  }

  if (takeUserGuess === randomWord.charAt(8).toUpperCase()) {
    var getSlot8 = document.getElementById('slot8')
    getSlot8.innerHTML = takeUserGuess
    slot8 = true
  }

  if (takeUserGuess === randomWord.charAt(9).toUpperCase()) {
    var getSlot9 = document.getElementById('slot9')
    getSlot9.innerHTML = takeUserGuess
    slot9 = true
  }

  if (takeUserGuess === randomWord.charAt(10).toUpperCase()) {
    var getSlot10 = document.getElementById('slot10')
    getSlot10.innerHTML = takeUserGuess
    slot10 = true
  }

  if (arrayOfWrongLetters.indexOf(takeUserGuess) === -1 &&
  takeUserGuess !== randomWord.charAt(0).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(1).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(2).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(3).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(4).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(5).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(6).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(7).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(8).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(9).toUpperCase() &&
  takeUserGuess !== randomWord.charAt(10).toUpperCase()) {
    arrayOfWrongLetters.push(takeUserGuess)
    var changeImage = document.getElementById('image')
    changeImage.src = 'images/stage' + imageCount + '.png' //  images/stage_.png
    imageCount++
  }

  if (imageCount > 9) {
    var gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'game over'
    exitGame()
  }

  if (numSlots === 2 && (slot0 && slot1)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 3 && (slot0 && slot1 && slot2)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 4 && (slot0 && slot1 && slot2 && slot3)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 5 && (slot0 && slot1 && slot2 && slot3 && slot4)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 6 && (slot0 && slot1 && slot2 && slot3 && slot4 && slot5)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 7 && (slot0 && slot1 && slot2 && slot3 && slot4 && slot5 &&
  slot6)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 8 && (slot0 && slot1 && slot2 && slot3 && slot4 && slot5 &&
  slot6 && slot7)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 9 && (slot0 && slot1 && slot2 && slot3 && slot4 && slot5 &&
  slot6 && slot7 && slot8)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 10 && (slot0 && slot1 && slot2 && slot3 && slot4 && slot5 &&
  slot6 && slot7 && slot8 && slot9)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  if (numSlots === 11 && (slot0 && slot1 && slot2 && slot3 && slot4 && slot5 &&
  slot6 && slot7 && slot8 && slot9 && slot10)) {
    gameStatus = document.getElementById('result')
    gameStatus.innerHTML = 'you win!'
    exitGame()
  }

  console.log(arrayOfWrongLetters)
}

function exitGame () {
  $("[onclick]").removeAttr("onclick")
}
