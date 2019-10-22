'use strict'

const store = require('../store.js')

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

const onSignUpSuccess = function () {
  successMessage('Signed Up Successfully!')
  $('.password').val('')
  $('.commandLine').show()
  $('#sign-up').hide()
  $('.signUp').hide()
}

const onSignUpFailure = function () {
  failureMessage('Sign Up Failed')
  $('.password').val('')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed In Successfully!')
  store.user = responseData.user
  $('.password').val('')
  $('#sign-in').hide()
  $('.signin').hide()
  $('.commandLine2').show()
  $('#adventure2 input').focus()
  $('.resetState').hide()
}

const onSignInFailure = function () {
  failureMessage('Sign In Failed')
  $('.password').val('')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed Password Successfully!')
  $('.password').val('')
  $('#change-password input:first').focus()
}

const onChangePasswordFailure = function () {
  failureMessage('Change Password Failed')
  $('.password').val('')
  $('#change-password input:first').focus()
}

const onAccountGet = function () {
  $('#change-password').show()
  $('#change-password input:first').focus()
  $('#changePassword').show()

  $('#sign-out').show()
  $('.prepareForAdventure').hide()
  $('.goOnAdventure').hide()
  $('.account').hide()
  $('.resetState').show()
}

const signOutSuccess = function () {
  successMessage('Signed out successfully')
  $('form').trigger('reset')
  $('.latestCharacter').text('')
  store.user = null
}

const signOutFailure = function () {
  failureMessage('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onAccountGet
}
