const config = require('../config.js')
const store = require('../store.js')

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

let id = 0

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
    data: {

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
  getCharacterStoryPart
}
