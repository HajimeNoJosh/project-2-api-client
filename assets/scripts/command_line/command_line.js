const getFormFields = require('../../../lib/get-form-fields.js')
const authEvents = require('../auth/events.js')
const charactersEvents = require('../characters/events.js')

const onGetAccount = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  if (formData.pirate.adventure.toUpperCase() === 'SI') {
    $('#sign-in').show()
    $('.signin').show()
    $('.commandLine').hide()
    $('.resetState').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'SU') {
    $('.signUp').show()
    $('#sign-up').show()
    $('.commandLine').hide()
    $('.resetState').show()
  }
}

const adventureCommand = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  if (formData.pirate.adventure.toUpperCase() === 'CP') {
    $('#change-password').show()
    $('#changePassword').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'SO') {
    authEvents.onSignOut()
    $('#sign-out').hide()
    $('.commandLine2').hide()
    $('.commandLine').show()
    $('.resetState').hide()
    $('.resetState2').hide()
  } else if (formData.pirate.adventure.toUpperCase() === 'CC') {
    $('#create-character').show()
    $('.createCharacter').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'IC') {
    charactersEvents.onGetAll()
    $('.getCharactersSection').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'SA') {
    $('#get-one-character').show()
    $('#get-one-character').show()
    $('.getOneCharacterSection').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'CC') {
    $('#create-character').show()
    $('.createCharacter').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'UC') {
    $('#update-character').show()
    $('.updateCharacter').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure.toUpperCase() === 'DC') {
    $('#delete-character').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  }
}

module.exports = {
  onGetAccount,
  adventureCommand
}
