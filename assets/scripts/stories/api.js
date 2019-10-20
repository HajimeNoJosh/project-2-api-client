const config = require('../config.js')
const store = require('../store.js')

const updateStory = function (id, currentStoryPart) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/stories',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'story': {
        'description': 'To play please type down below with your choices based off the number you want. <br> 1. I understand <br> 2. I do not understand',
        'character_id': id.character.id
      }
    }
  })
}

const getStory = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/stories',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    }
  })
}

module.exports = {
  updateStory,
  getStory
}
