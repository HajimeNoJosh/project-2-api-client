const config = require('../config.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const characterUi = require('./ui.js')
// const gameLogic = require('../game_logic/game_logic.js')

let id = 0

let currentStoryPart = ''

const optionOne = 'Type your choice down below. <br> 1. I understand <br> 2. I do not understand'

const optionOneOne = "Perched out of the crows nest of a navy vessal sits two young recruits. While bantering one spots a barrel in the sea. They quickly grab the attention of the crew on deck who draw the barrel on board. As the crew takes it downstairs to the kitchen, the two recruits notice something else in the distance, and fear suddenly appears in their eyes. <br><br> 'Pirates!' they scream as an explosion hits the deck. <br><br> Chaos ensues around the vessal as pirates begin to board. Two pirates in particular make their way downstairs and spot the barrel. Standing over it they begin to discuss what to do with it. <br><br> This is when you wake up. Having just escaped a whirlpool that destroyed your tiny fishing boat you climbed into a barrel on your boat and fell asleep. The noise of two men woke you up. Would you like to... <br><br> 1. Pop out of the barrel and stretch your arms <br> 2. Stay inside and hope they don't look in"

const optionOneTwo = 'Type your choice down below. <br> 1. I understand'

const optionOneOneOne = "Realizing how cramped the barrel is you decide to stretch your limbs a bit. The lid pops open and out you come both arms spreading out and quite by accident knocking out the two men looming over the barrel. The two men fall to the ground making the loudest crash you've ever heard. <br><br> A voice calls from upstairs 'Koby check that out!' <br><br> You begin to hear footsteps on their way down. Would you like to.. <br><br>1 Find an escape route away from the increasingly closer steps <br>2 Wait for Koby to approach so you can ask him questions"

const optionOneOneTwo = "Realizing how crazy it would be to pop out of the barrel when you don't even know who's outside, you decided to get comfy and wait it out. The two pirates outside finally agree that the barrel must be rum and decide to open it up right there. As light streams in you meekly look up and see two of the scariest faces you've ever seen. Roughly you find youself outside of the safe barrel. <br><br> The men on the right sneers 'looks like Captain Alvida has a new cabin boy' Seeing no real escape do you want to... <br><br>1 Fight back and hope you can escape <br>2 Stay calm and hope an oppurtunity arises to escape"

const optionOneOneOneOne = "The footsteps sound heavy and you don't have another barrel you can use to catch Koby by suprise with. So, the next best option is to find another way out. Quickly surveying around, you spot a door and duck inside. <br><br> You find yourself surrounded by food, 'must be the kitchen store room', you think, 'can only wait here and hope.' <br><br> Through the door you barely make out a voice calling up 'Nothing down here but two of our men!' <br><br> The voice continues ' no need to come down, I'll wake them up.'<br><br> You hear water splashing and some loud grunting. <br><br> One says 'Where is the little monster...I'll kill him!' <br><br> The other replies 'He cound't have gotten far, Koby would have seen him' <br><br> Your stomch tightens and you attempt to hide between some crates of apples but accidently knock a whole crate down. <br><br> 'What was that' <br><br> 'It came from that room over there' <br><br> The door swings open and the last thing your life sees and hears are your screams and two cutlasses swinging heavy and fast. <br><br> YOU'RE DEAD"

const optionOneOneOneTwo = "While waiting for Koby you take a quick survey of your surroundings. You notice you are in the kitchen and the two men who you knocked out were pirates. <br><br> The two seem to contradict one another as the kitchen seems too nice to fit the idea you of pirates. The footsteps have reached the last corner of the steps and turn your attention that way. Around the corner comes a short pink haired boy who seems terribly frightend. <br><br> He stares agape at you and looks about ready to scream. Springing into action you grasp his mouth shut and tell him you won't hurt him if he stays quite. <br><br> He nods his head while you loosen your grip and ask 'Is this a pirate ship?' <br><br> He replies 'No, this is a naval vessal being raided by Captain Alvida' <br><br> Suddenly a voice screams from upstairs 'KOBY!' <br><br> The boy wimpers and looks at you, pleading. You have a bad feeling about this. <br><br> As the two men begin to stir, you grab Koby and run to the nearest door you can find. Looking around you realize you are in the store room of the kitchen. You hear the two men exchange disgust at being knocked out and puzzlement about how much time has passed. They depart for upstairs, likely to report what happend. Would you like to... <br><br> 1 Talk to Koby <br>2 Rush to the deck"

const optionOneOneOneTwoOne = "While in the store room you decide its best to pass some time and try and get some information from Koby. <br><br> You open the conversation by explaining how your small fishing boat was destroyed in a whirlpool and that's how you ended up in a barrel below deck. <br><br> Koby stares bugged eye and begins to share his tale of being captured by Alvida and forced to serve as cabin boy. Koby proceeds to ask why you were on a small boat to begin with. <br><br> 1 To become Pirate King! <br> 2 Fishing"

const optionOneOneOneTwoTwo = "Now is your chance while they are unsuspecting. Ever since you were a kid you have heard the news of pirates attacking unsuspecting ships. <br><br> If you can take one down you can win glory! Luckily when you were a kid you ate the mythical devil fruit and with gusto you launch yourself to the deck. <br><br> The two man are talking to a women who you can only assume is their captain. <br><br> 'Hey! I'm here for your head!' you scream loudly. <br><br> Pushing the two men aside, she lumbers forward 'I am sorry' she jeers 'and you are?' <br><br> You don't want to lose this oppurtunity and wind up your punch you have been training since you were 5 and launch the hardest hit you have ever made. She fly's through the air, knocked out instantly. <br><br> 'Anyone else want some' you bark. <br><br> Having just seen their captain get knocked out with one punch they just want you away. They grab you a small boat and off you sail. <br><br> Feeling very proud and strong you wonder if there is a naval recruiting station nearby."

const optionOneOneOneTwoOneOne = "You loudly proclaim 'TO BECOME PIRATE KING' <br><br> Taken aback Koby begins muttering 'impossible...IMPOSSible...IMPOSSIBLE...in this age not only are there so many pirates with the same dream there are also strong bounty hunters like zoro who will kill you.' <br><br> You proudy state 'I don't care if I die, cause if I die it was while following my dream!' <br><br> Suddenly the ceiling crashes down and a women with a club stands before you. <br><br> 'Pirate King huh? Koby why are you with this person, you know damn well it is I who will become Pirate King' <br><br> Koby looks at you and your nonchallant smile and suddenly inspired by your words yells 'shut up you smelly old hag' <br><br> Alvidas face scrunches up in anger and you see her prepare her attack Would you like to... <br><br>1 Fight in the store room <br>2 Take the fight to the deck"

const optionOneOneOneTwoOneTwo = "'I was just out fishing' you reply. <br><br> Koby whimpers a bit and says 'So you can't protect me.' <br><br> At that very moment the ceiling comes crashing down and a women stands in the dust. <br><br> 'So this is where you were hiding huh Koby!' she snares 'and who's this next to you, a friend?' <br><br> Do you want to... <br><br>1 Bow down and say yes <br>2 Refuse to bow down"

const optionOneOneOneTwoOneOneOne = "You don't have any time to think but instead react. You rush to save Koby from Alvidas attack but find the space cramped with objects. <br><br> Her club swings hard and fast and Koby crumbled under the weight. Angered you turn to Alvida and finally get a chance to show why you will be Pirate King. <br><br> Alvidas club comes down once again. It makes contact but you remain standing. You notice the shock in Alvidas eyes and proclaim <br><br> 'A blunt attack like that won't be enough to stop me, I ate the mythical devil fruit and am now made of rubber.' <br><br> Stretching your arms back for momentum you launch Alvida out the roofs hold, winning against the feared Captain of the Alvida Pirates. With no time to mourn Koby you hop to the deck and order the scared pirates to get you boat. <br><br>  You set sail feeling uneasy and unaccomplished"

const optionOneOneOneTwoOneOneTwo = "You feel cramped in the space around you and with great reflexes launch yourself and Koby out of the hold Alvida made. <br><br> On the deck you see all of Alvidas crew staring at you. You prepare youself for battle as Koby gets behind you. Alvida jumps on the deck and glares at you. <br><br> 'Im going to enjoy this' she jeers <br><br> You laugh which only angers Alvida more. She proceeds to swing her club onto your head. It makes contact but you remain standing. You notice the shock in Alvidas eyes and proclaim <br><br> 'A blunt attack like that won't be enough to stop me, I ate the mythical devil fruit and am now made of rubber.' Stretching your arms back for momentum you launch Alvida off the ship. Her crew stare in awe and fear. You laugh and ask them if they have a small ship they can spare. You set sail with Koby looking for more adventure. <br><br> 'This Zoro fellow sounds interesting tell me more about him Koby'"

const optionOneOneOneTwoOneTwoOne = "You are in way over your head. You bow down and agree to join Alvidas pirate crew as their newest cabin boy alongside Koby. <br><br> YOU'RE A CABIN BOY!"

const optionOneOneOneTwoOneTwoTwo = "You've never bowed down to anyone before and you sure as hell ain't starting now. <br><br> 'No' you scream Alvida seems taken aback <br><br>  'No you say, no one says no to me' <br><br> With great fury and speed she hits your side with her club knocking you 60 ft through the side of the ship where you fall into the ocean and drown. <br><br> YOU'RE DEAD"

const optionOneOneTwoOne = 'Your eyes adjust to the light and your brain clears up. The only way out of this alive is to beat them in a fight. <br><br> You take them by suprise hopping out of the barrel. Both men jump back and draw their swords. You realize they are pirates and this will not be a fair fight. You scan the room and see a kitchen knife. You dive for it just as the pirates swing your way. Grasping it tightly as a new vigor fills your sould do you want to... <br><br>1 Rush them down <br>2 Try and scare them'

const optionOneOneTwoTwo = "You quickly make up your mind to play along. Maybe a chance to escape will present itself, besides there is no way you could beat these two men in a fight. <br><br> You find youself being roughly dragged upstairs where you find youself presented in front of a woman, who you can only assume is Captain Alvida. <br><br> 'Who is this' Alvida gleefully asks 'seems perfect company for Koby' <br><br> 'Just what Peppoko and I were thinking Captain' <br><br> 'Yeah' agrees Peppoko 'me and Poppoko found him in a barrel downstairs' <br><br> The next thing you know, a bucket and mop are in your hands and you are mopping Captain Alvida's ship as a cabin boy. <br><br> YOU'RE A CABIN BOY"

const optionOneOneTwoOneOne = "You run straight at them screaming loudly. The pirate on the right takes a step back and you seize the oppurtunity. Slashing wildly you manage to cut him on his sword hand. The sword crashes down and you go to turn towards the other pirate. But he's vanished from where he was. The last thing you hear is a whoosh from the opposite direction. <br><br> YOU'RE DEAD"

const optionOneOneTwoOneTwo = "You glasp your knife tightly and say in the most menacing tone you can <br><br> 'I was trained by Master Shang YunXiang in the art of Esgrima Criolla. I could disarm you in a matter of minutes' <br><br> To your dismay the two pirates only laugh and call your bluff, walking menacingly towards you. You repeat your warning with a quiver in your voice dropping your knife as both their swords come crashing down. <br><br> YOU'RE DEAD"

const changeStory = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  $('#inputStory').val('')
  if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOne) {
    currentStoryPart = optionOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOne) {
    currentStoryPart = optionOneTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneTwo) {
    currentStoryPart = optionOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOne) {
    currentStoryPart = optionOneOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOne) {
    currentStoryPart = optionOneOneTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneOne) {
    currentStoryPart = optionOneOneOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneOne) {
    currentStoryPart = optionOneOneOneTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneOneTwo) {
    currentStoryPart = optionOneOneOneTwoOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneOneTwo) {
    currentStoryPart = optionOneOneOneTwoTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneOneTwoOne) {
    currentStoryPart = optionOneOneOneTwoOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneOneTwoOne) {
    currentStoryPart = optionOneOneOneTwoOneTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneOneTwoOneOne) {
    currentStoryPart = optionOneOneOneTwoOneOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneOneTwoOneOne) {
    currentStoryPart = optionOneOneOneTwoOneOneTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneOneTwoOneTwo) {
    currentStoryPart = optionOneOneOneTwoOneTwoOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneOneTwoOneTwo) {
    currentStoryPart = optionOneOneOneTwoOneTwoTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneTwo) {
    currentStoryPart = optionOneOneTwoOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneTwo) {
    currentStoryPart = optionOneOneTwoTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 1 && currentStoryPart === optionOneOneTwoOne) {
    currentStoryPart = optionOneOneTwoOneOne
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else if (parseInt(formData.story.choice) === 2 && currentStoryPart === optionOneOneTwoOne) {
    currentStoryPart = optionOneOneTwoOneTwo
    $('.currentStoryPart').html(currentStoryPart)
    updateCharacterStoryPart(currentStoryPart)
  } else {
    characterUi.failureMessage('Invalid choice')
  }
}

const createCharacter = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/characters',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'character': {
        'given_name': formData.character.given_name,
        'family_name': formData.character.family_name,
        'storyPart': 'Type your choice down below. <br> 1. I understand <br> 2. I do not understand'
      }
    }
  })
}

const getCharacters = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCharacter = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters/' + formData.character.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    },
    success: function (data) {
      id = data.character.id
      currentStoryPart = data.character.storyPart
    }
  })
}

const getCharacterStoryPart = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/characters/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
    }
  })
}

const deleteCharacter = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/characters/' + formData.character.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCharacter = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/characters/' + formData.character.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateCharacterStoryPart = function (storyPart) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/characters/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'character': {
        'storyPart': storyPart
      }
    }
  })
}

module.exports = {
  createCharacter,
  getCharacters,
  getCharacter,
  deleteCharacter,
  updateCharacter,
  updateCharacterStoryPart,
  getCharacterStoryPart,
  changeStory
}
