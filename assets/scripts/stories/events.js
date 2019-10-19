// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onCreateStory = function (id) {
  api.updateStory(id)
  // .then(ui.onCreateSuccess)
  // .catch(ui.onCreateFailure)
}

module.exports = {
  onCreateStory
}
