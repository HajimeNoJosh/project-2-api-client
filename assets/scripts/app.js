'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const authUi = require('./auth/ui.js')
const charactersEvents = require('./characters/events.js')
const charactersUi = require('./characters/ui.js')
const gamelogic = require('./game_logic/game_logic.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out').on('submit', authEvents.onSignOut).hide()
  $('#changePassword').hide()
  $('#create-character').on('submit', charactersEvents.onCreate).hide()
  $('#getCharacters').on('click', charactersEvents.onGetAll).hide()
  $('#get-one-character').on('submit', charactersEvents.onGetOne).hide()
  $('#get-one-character').on('submit', gamelogic.storyProgress).hide()
  $('#delete-character').on('submit', charactersEvents.onDeleteCharacter).hide()
  $('#update-character').on('submit', charactersEvents.onUpdateCharacter).hide()
  $('.createCharacter').hide()
  $('.updateCharacter').hide()
  $('.getCharactersSection').hide()
  $('.getOneCharacterSection').hide()
  $('.textGameSection').hide()
  $('.resetState').on('click', charactersUi.onResetState).hide()
  $('.prepareForAdventure').on('click', charactersUi.onPreparation).hide()
  $('.goOnAdventure').on('click', charactersUi.onAdventuring).hide()
  $('.account').on('click', authUi.onAccountGet).hide()
})
