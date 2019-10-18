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
  $('.clearText').val('')
}
const onCreateFailure = function () {
  failureMessage('Created Failed')
  $('.clearText').val('')
}

const onDeleteCharacterSuccess = function () {
  successMessage('Deleted Successfully!')
  $('.clearText').val('')
}
const onDeleteCharacterFailure = function () {
  failureMessage('Deleted Unsuccessfully!')
  $('.clearText').val('')
}

const onUpdateCharacterSuccess = function () {
  successMessage('Updated Successfully!')
  $('.clearText').val('')
}
const onUpdateCharacterFailure = function () {
  failureMessage('Updated Unsuccessfully!')
  $('.clearText').val('')
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
  $('.clearText').val('')
}
const onGetOneFailure = function () {
  failureMessage('Cannot Show Character')
  $('.clearText').val('')
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
