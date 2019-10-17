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

const onGetAllSuccess = function (data) {
  console.log(data.characters)
  $('.allCharacters').text(' ')
  data.characters.forEach(function (character) {
    $('.allCharacters').append('<li>' + 'ID: ' + character.id + ' ' + 'Name: ' + character.full_name + '</li>')
  })
}
const onGetOneSuccess = function (data) {
  console.log(data)
  $('.oneCharacter').text(' ')
  $('.oneCharacter').append('ID: ' + data.character.id + ' ' + 'Name: ' + data.character.full_name)
}

const onCreateFailure = function () {
  failureMessage('Created Failed')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSuccess,
  onGetOneSuccess
}
