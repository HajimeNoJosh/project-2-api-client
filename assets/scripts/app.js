'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const charactersEvents = require('./characters/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out').on('submit', authEvents.onSignOut).hide()
  $('#changePassword').hide()
  $('#create-character').on('submit', charactersEvents.onCreate).hide()
  $('#getCharacters').on('click', charactersEvents.onGetAll).hide()
  $('#get-one-character').on('submit', charactersEvents.onGetOne).hide()
  $('#delete-character').on('submit', charactersEvents.onDeleteCharacter).hide()
  $('#update-character').on('submit', charactersEvents.onUpdateCharacter).hide()
  $('.createCharacter').hide()
  $('.updateCharacter').hide()
  $('.getCharactersSection').hide()
  $('.getOneCharacterSection').hide()
})
