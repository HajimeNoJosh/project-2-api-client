const config = require('../config.js')
const store = require('../store.js')

const createCharacter = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/characters',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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

module.exports = {
  createCharacter,
  getCharacters,
  getCharacter,
  deleteCharacter,
  updateCharacter
}
