const getFormFields = require('../../../lib/get-form-fields.js')
// const changeStories = require('./stories/api.js')
const charactersApi = require('../characters/api.js')

let currentStoryPart = 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand'

const changeStory = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  if (parseInt(formData.story.choice) === 1 && currentStoryPart === 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand') {
    currentStoryPart = "You awake with a splitting headache in a dark room. There isn't much to look at around you. Perhaps you should turn on the lights. What would you like to do? <br> 1. Turn on the Lights <br> 2. Go back to sleep"
    $('.currentStoryPart').html(currentStoryPart)
    charactersApi.updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand') {
    currentStoryPart = "What part did you not understand? <br> 1. The simple instructions <br> 2. I don't read english"
    $('.currentStoryPart').html(currentStoryPart)
    charactersApi.updateCharacterStoryPart(currentStoryPart)
  }
}

module.exports = {
  changeStory
}
