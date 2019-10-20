// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateStory = function (id) {
  api.updateStory(id)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onGetStory = function (id) {
  api.getStory(id)
    .then(ui.onGetSuccess)
    .catch(ui.onGetFailure)
}

module.exports = {
  onCreateStory,
  onGetStory
}
