const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createCharacter(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onGetAll = function (event) {
  api.getCharacters()
    .then(ui.onGetAllSuccess)
    .catch(ui.onGetAllFailure)
}

const onGetOne = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.getCharacter(formData)
    .then(ui.onGetOneSuccess)
    .catch(ui.onGetOneFailure)
}

const onDeleteCharacter = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteCharacter(formData)
    .then(ui.onDeleteCharacterSuccess)
    .catch(ui.onDeleteCharacterFailure)
}

const onUpdateCharacter = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.updateCharacter(formData)
    .then(ui.onUpdateCharacterSuccess)
    .catch(ui.onUpdateCharacterFailure)
}

module.exports = {
  onCreate,
  onGetAll,
  onGetOne,
  onDeleteCharacter,
  onUpdateCharacter
}
