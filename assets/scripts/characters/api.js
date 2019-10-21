const config = require('../config.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const gameLogic = require('../game_logic/game_logic.js')

let id = 0

let currentStoryPart = ''

const changeStory = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(currentStoryPart)
  if (parseInt(formData.story.choice) === 1 && currentStoryPart === 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand') {
    currentStoryPart = "You awake with a splitting headache in a dark room. There isn't much to look at around you. Perhaps you should turn on the lights. What would you like to do? <br> 1. Turn on the Lights <br> 2. Go back to sleep"
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand') {
    currentStoryPart = "What part did you not understand? <br> 1. The simple instructions <br> 2. I don't read english"
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === "You awake with a splitting headache in a dark room. There isn't much to look at around you. Perhaps you should turn on the lights. What would you like to do? <br> 1. Turn on the Lights <br> 2. Go back to sleep") {
    currentStoryPart = 'YOU DEAD BITCH'
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  }
}

const createCharacter = function (formData) {
  console.log(formData.character.given_name)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/characters',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'character': {
        'given_name': formData.character.given_name,
        'family_name': formData.character.family_name,
        'storyPart': 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand'
      }
    }
  })
}

const getCharacters = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCharacter = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters/' + formData.character.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    },
    success: function (data) {
      id = data.character.id
      currentStoryPart = data.character.storyPart
    }
  })
}

const getCharacterStoryPart = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      console.log(data)
    }
  })
}

const deleteCharacter = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/characters/' + formData.character.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCharacter = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/characters/' + formData.character.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateCharacterStoryPart = function (storyPart) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/characters/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'character': {
        'storyPart': storyPart
      }
    }
  })
}

module.exports = {
  createCharacter,
  getCharacters,
  getCharacter,
  deleteCharacter,
  updateCharacter,
  updateCharacterStoryPart,
  getCharacterStoryPart,
  changeStory
}
