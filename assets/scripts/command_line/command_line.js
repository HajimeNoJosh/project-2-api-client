const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAccount = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  if (formData.pirate.adventure === 'SI') {
    $('#sign-in').show()
    $('.signin').show()
    $('.commandLine').hide()
    $('.resetState').show()
  } else if (formData.pirate.adventure === 'SU') {
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

  if (formData.pirate.adventure === 'CP') {
    $('#change-password').show()
    $('#changePassword').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'SO') {
    $('#sign-out').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'CC') {
    $('#create-character').show()
    $('.createCharacter').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'IC') {
    $('#getCharacters').show()
    $('.getCharactersSection').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'SC') {
    $('#get-one-character').show()
    $('#get-one-character').show()
    $('.getOneCharacterSection').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'CC') {
    $('#create-character').show()
    $('.createCharacter').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'UC') {
    $('#update-character').show()
    $('.updateCharacter').show()
    $('.commandLine2').hide()
    $('.resetState').hide()
    $('.resetState2').show()
  } else if (formData.pirate.adventure === 'DC') {
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
