const getFormFields = require('../../../lib/get-form-fields.js')

const whatCommand = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  if (formData.pirate.adventure === 'SI') {
    $('#sign-in').show()
    $('.signin').show()
    $('#command-line').hide()
  }
}

module.exports = {
  whatCommand
}
