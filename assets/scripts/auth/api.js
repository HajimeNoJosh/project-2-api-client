'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData,
    success: function () {
      $('#sign-out').show()
      $('#sign-in').hide()
      $('#sign-up').hide()
      $('.signin').hide()
      $('.signUp').hide()
      $('#change-password').show()
      $('#changePassword').show()
      $('#victory').show()
      $('#create-character').show()
      $('.createCharacter').show()
      $('.updateCharacter').show()
      $('.getCharactersSection').show()
      $('.getOneCharacterSection').show()
      $('#create-character').show()
      $('#getCharacters').show()
      $('#get-one-character').show()
      $('#delete-character').show()
      $('#update-character').show()
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function () {
      $('#change-password').hide()
      $('#sign-in').show()
      $('#sign-up').show()
      $('#sign-out').hide()
      $('#amount-games-lost').hide()
      $('#amount-games-won').hide()
      $('#amount-games').hide()
      $('#changePassword').hide()
      $('#message').show()
      $('#victory').hide()
      $('.createCharacter').hide()
      $('.updateCharacter').hide()
      $('.getCharactersSection').hide()
      $('.getOneCharacterSection').hide()
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
