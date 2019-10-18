const api = require('./api.js')

const successMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateSuccess = function () {
  successMessage('Created Successfully!')
}
const onCreateFailure = function () {
  failureMessage('Created Failed')
}

const onDeleteCharacterSuccess = function () {
  successMessage('Deleted Successfully!')
}
const onDeleteCharacterFailure = function () {
  failureMessage('Deleted Unsuccessfully!')
}

const onUpdateCharacterSuccess = function () {
  successMessage('Updated Successfully!')
}
const onUpdateCharacterFailure = function () {
  failureMessage('Updated Unsuccessfully!')
}

const onGetAllSuccess = function (data) {
  $('.allCharacters').text(' ')
  data.characters.forEach(function (character) {
    $('.allCharacters').append('<li>' + 'ID: ' + character.id + ' ' + 'Name: ' + character.full_name + '</li>')
  })
  successMessage('Showing Characters')
}
const onGetAllFailure = function () {
  failureMessage('Cannot Show Characters')
}
const onGetOneSuccess = function (data) {
  $('.oneCharacter').text(' ')
  $('.oneCharacter').append('ID: ' + data.character.id + ' ' + 'Name: ' + data.character.full_name)
  successMessage('Showing Character ' + data.character.full_name)
}
const onGetOneFailure = function () {
  failureMessage('Cannot Show Character')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSuccess,
  onGetAllFailure,
  onGetOneSuccess,
  onGetOneFailure,
  onDeleteCharacterSuccess,
  onDeleteCharacterFailure,
  onUpdateCharacterSuccess,
  onUpdateCharacterFailure
}
