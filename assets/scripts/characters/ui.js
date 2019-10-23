const optionOneOneOneOne = "The footsteps sound heavy and you don't have another barrel you can use to catch Koby by suprise with. So, the next best option is to find another way out. Quickly surveying around, you spot a door and duck inside. <br><br> You find yourself surrounded by food, 'must be the kitchen store room', you think, 'can only wait here and hope.' <br><br> Through the door you barely make out a voice calling up 'Nothing down here but two of our men!' <br><br> The voice continues ' no need to come down, I'll wake them up.'<br><br> You hear water splashing and some loud grunting. <br><br> One says 'Where is the little monster...I'll kill him!' <br><br> The other replies 'He could't have gotten far, Koby would have seen him' <br><br> Your stomch tightens and you attempt to hide between some crates of apples but accidently knock a whole crate down. <br><br> 'What was that' <br><br> 'It came from that room over there' <br><br> The door swings open and the last thing your life sees and hears are your screams and two cutlasses swinging heavy and fast. <br><br> YOU'RE DEAD"

const optionOneOneOneTwoTwo = "Now is your chance while they are unsuspecting. Ever since you were a kid you have heard the news of pirates attacking unsuspecting ships. <br><br> If you can take one down you can win glory! Luckily when you were a kid you ate the mythical devil fruit and with gusto you launch yourself to the deck. <br><br> The two man are talking to a women who you can only assume is their captain. <br><br> 'Hey! I'm here for your head!' you scream loudly. <br><br> Pushing the two men aside, she lumbers forward 'I am sorry' she jeers 'and you are?' <br><br> You don't want to lose this oppurtunity and wind up your punch you have been training since you were 5 and launch the hardest hit you have ever made. She fly's through the air, knocked out instantly. <br><br> 'Anyone else want some' you bark. <br><br> Having just seen their captain get knocked out with one punch they just want you away. They grab you a small boat and off you sail. <br><br> Feeling very proud and strong you wonder if there is a naval recruiting station nearby."

const optionOneOneOneTwoOneOneOne = "You don't have any time to think but instead react. You rush to save Koby from Alvidas attack but find the space cramped with objects. <br><br> Her club swings hard and fast and Koby crumbled under the weight. Angered you turn to Alvida and finally get a chance to show why you will be Pirate King. <br><br> Alvidas club comes down once again. It makes contact but you remain standing. You notice the shock in Alvidas eyes and proclaim <br><br> 'A blunt attack like that won't be enough to stop me, I ate the mythical devil fruit and am now made of rubber.' <br><br> Stretching your arms back for momentum you launch Alvida out the roofs hold, winning against the feared Captain of the Alvida Pirates. With no time to mourn Koby you hop to the deck and order the scared pirates to get you boat. <br><br>  You set sail feeling uneasy and unaccomplished"

const optionOneOneOneTwoOneOneTwo = "You feel cramped in the space around you and with great reflexes launch yourself and Koby out of the hold Alvida made. <br><br> On the deck you see all of Alvidas crew staring at you. You prepare youself for battle as Koby gets behind you. Alvida jumps on the deck and glares at you. <br><br> 'Im going to enjoy this' she jeers <br><br> You laugh which only angers Alvida more. She proceeds to swing her club onto your head. It makes contact but you remain standing. You notice the shock in Alvidas eyes and proclaim <br><br> 'A blunt attack like that won't be enough to stop me, I ate the mythical devil fruit and am now made of rubber.' Stretching your arms back for momentum you launch Alvida off the ship. Her crew stare in awe and fear. You laugh and ask them if they have a small ship they can spare. You set sail with Koby looking for more adventure. <br><br> 'This Zoro fellow sounds interesting tell me more about him Koby'"

const optionOneOneOneTwoOneTwoOne = "You are in way over your head. You bow down and agree to join Alvidas pirate crew as their newest cabin boy alongside Koby. <br><br> YOU'RE A CABIN BOY!"

const optionOneOneOneTwoOneTwoTwo = "You've never bowed down to anyone before and you sure as hell ain't starting now. <br><br> 'No' you scream Alvida seems taken aback <br><br>  'No you say, no one says no to me' <br><br> With great fury and speed she hits your side with her club knocking you 60 ft through the side of the ship where you fall into the ocean and drown. <br><br> YOU'RE DEAD"

const optionOneOneTwoTwo = "You quickly make up your mind to play along. Maybe a chance to escape will present itself, besides there is no way you could beat these two men in a fight. <br><br> You find youself being roughly dragged upstairs where you find youself presented in front of a woman, who you can only assume is Captain Alvida. <br><br> 'Who is this' Alvida gleefully asks 'seems perfect company for Koby' <br><br> 'Just what Peppoko and I were thinking Captain' <br><br> 'Yeah' agrees Peppoko 'me and Poppoko found him in a barrel downstairs' <br><br> The next thing you know, a bucket and mop are in your hands and you are mopping Captain Alvida's ship as a cabin boy. <br><br> YOU'RE A CABIN BOY"

const optionOneOneTwoOneOne = "You run straight at them screaming loudly. The pirate on the right takes a step back and you seize the oppurtunity. Slashing wildly you manage to cut him on his sword hand. The sword crashes down and you go to turn towards the other pirate. But he's vanished from where he was. The last thing you hear is a whoosh from the opposite direction. <br><br> YOU'RE DEAD"

const optionOneOneTwoOneTwo = "You glasp your knife tightly and say in the most menacing tone you can <br><br> 'I was trained by Master Shang YunXiang in the art of Esgrima Criolla. I could disarm you in a matter of minutes' <br><br> To your dismay the two pirates only laugh and call your bluff, walking menacingly towards you. You repeat your warning with a quiver in your voice dropping your knife as both their swords come crashing down. <br><br> YOU'RE DEAD"

const successMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000).show()
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000).show()
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateSuccess = function (id) {
  successMessage('Created Successfully!')
  $('.clearText').val('')
  $('.latestCharacter').text('Latest character created id: ' + id.character.id).hide()
  $('.resetState2').hide()
  $('.commandLine2').show()
  $('#adventure2 input').val('').focus()
  $('#create-character').hide()
  $('.createCharacter').hide()
  $('.latestCharacter').show()
}

const onCreateFailure = function () {
  failureMessage('Created Failed')
  $('.clearText').val('')
}

const onDeleteCharacterSuccess = function () {
  successMessage('Deleted Successfully!')
  $('.clearText').val('')
  $('.latestCharacter').text('')
}
const onDeleteCharacterFailure = function () {
  failureMessage('Deleted Unsuccessfully!')
  $('.clearText').val('')
}

const onUpdateCharacterSuccess = function () {
  successMessage('Updated Successfully!')
  $('.clearText').val('')
}
const onUpdateCharacterFailure = function () {
  failureMessage('Updated Unsuccessfully!')
  $('.clearText').val('')
}

const onGetAllSuccess = function (data) {
  $('.allCharacters').text(' ')
  data.characters.forEach(function (character) {
    $('.allCharacters').append('<li>' + 'ID: ' + character.id + ' ' + 'Name: ' + character.full_name + '</li>')
  })
  successMessage('Showing Characters')
  $('.enterCommand').hide()
}
const onGetAllFailure = function () {
  failureMessage('Cannot Show Characters')
}

const onGetOneSuccess = function (data) {
  $('.oneCharacter').text(' ')
  $('.welcomCharacter').text(' ')
  $('.oneCharacter').append('ID: ' + data.character.id + ' ' + 'Name: ' + data.character.full_name)
  successMessage('Showing Character ' + data.character.full_name)
  $('.clearText').val('')
  $('.textGameSection').show()
  $('.welcomCharacter').append('Welcome: ' + data.character.full_name)
  $('.prepareForAdventure').hide()
  $('.goOnAdventure').hide()
  $('.account').hide()
  $('.oneCharacter').hide()
  $('.getCharactersSection').hide()
  $('#getCharacters').hide()
  $('.getOneCharacterSection').hide()
  $('#get-one-character').hide()
  $('.currentStoryPart').html(data.character.storyPart)
  $('.latestCharacter').hide()
  if (data.character.storyPart === optionOneOneOneOne) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneOneTwoOneOneOne) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneOneTwoOneOneTwo) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneOneTwoOneTwoOne) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneOneTwoOneTwoTwo) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneOneTwoTwo) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneTwoTwo) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneTwoOneOne) {
    $('#storySubmission').hide()
  } else if (data.character.storyPart === optionOneOneTwoOneTwo) {
    $('#storySubmission').hide()
  } else {
    $('#storySubmission').show()
    $('#storySubmission input:first').focus()
  }
}

const onGetOneFailure = function () {
  failureMessage('Cannot Show Character')
  $('.clearText').val('')
}

const onPreparation = function () {
  $('#create-character').show()
  $('.createCharacter').show()
  $('.updateCharacter').show()
  $('#delete-character').show()
  $('#update-character').show()
  $('.prepareForAdventure').hide()
  $('.goOnAdventure').hide()
  $('.account').hide()
  $('.resetState').show()
}
const onAdventuring = function () {
  $('.getCharactersSection').show()
  $('.getOneCharacterSection').show()
  $('#getCharacters').show()
  $('#get-one-character').show()
  $('#get-one-character input:first').val('hello')
  $('.resetState').show()
  $('.prepareForAdventure').hide()
  $('.goOnAdventure').hide()
  $('.account').hide()
}
const onResetState = function () {
  $('.resetState').hide()
  $('.signUp').hide()
  $('#sign-up').hide()
  $('.commandLine').show()
  $('#sign-in').hide()
  $('.signin').hide()
  $('#adventure input').val('').focus()
}
const onResetState2 = function () {
  $('.resetState2').hide()
  $('.commandLine2').show()
  $('#adventure2 input').val('').focus()
  $('#change-password').hide()
  $('#changePassword').hide()
  $('#sign-out').hide()
  $('#create-character').hide()
  $('.createCharacter').hide()
  $('#getCharacters').hide()
  $('.getCharactersSection').hide()
  $('#get-one-character').hide()
  $('#get-one-character').hide()
  $('.getOneCharacterSection').hide()
  $('#create-character').hide()
  $('.createCharacter').hide()
  $('#update-character').hide()
  $('.updateCharacter').hide()
  $('#delete-character').hide()
  $('.textGameSection').hide()
  $('#storySubmission').hide()
  $('.latestCharacter').show()
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSuccess,
  onGetAllFailure,
  onGetOneSuccess,
  onGetOneFailure,
  onDeleteCharacterSuccess,
  onDeleteCharacterFailure,
  onUpdateCharacterSuccess,
  onUpdateCharacterFailure,
  onResetState,
  onPreparation,
  onAdventuring,
  onResetState2,
  failureMessage
}
