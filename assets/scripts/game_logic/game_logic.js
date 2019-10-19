const getFormFields = require('../../../lib/get-form-fields.js')
// const changeStories = require('./stories/api.js')

let currentStoryPart = 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand'
let currentStoryPartNum = 1

const changeStory = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  console.log(formData.story.choice)
  if (parseInt(formData.story.choice) === 1 && currentStoryPartNum === 1) {
    console.log('hi')
    currentStoryPartNum++
    currentStoryPart = "You awake with a splitting headache in a dark room. There isn't much to look at around you. Perhaps you should turn on the lights. What would you like to do? <br> 1. Turn on the Lights <br> 2. Go back to sleep"
    $('.currentStoryPart').html(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPartNum === 1) {
    currentStoryPartNum++
    currentStoryPart = "What part did you not understand? <br> 1. The simple instructions <br> 2. I don't read english"
    $('.currentStoryPart').html(currentStoryPart)
  }
}

const storyProgress = function () {
  $('.currentStoryPart').html(currentStoryPart)
}

module.exports = {
  storyProgress,
  changeStory
}
