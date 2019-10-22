[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
# Project-2-api-client

[API](https://dashboard.heroku.com/apps/fast-cliffs-16483)
[Website](https://hajimenojosh.github.io/project-2-api-client/)

This app is a choose your own adventure app where users can sign in and have access to characters that they create who each have a individual stories depending on the path they chose.

I began this project with a clear idea of what my MVP product should be. I lined out my user stories alonside my wireframe and ERD. I began work on my backend to begin with. When I got it to the MVP I began to write my front end in order to test with more than my curl scripts. I added my Authorization and Character routes which I began to write forms for. When this was complete I began to work on version 2.

My verision 2 was my game logic. I knew I wanted to make a choose your own adventure game. Which I also knew required a story and for the characters I was creating to uniquely own. My initial plan was to store my stories in a seperate database and access that database as I continued. I believe that I did not associate the databases together correctly and it was causing my hair to fall out. So, at this point I decided that adding a story column to my original character database would work the same. As I was adding a default story to each character I discovered that I can add formdata and the default story at the same time. At this point that I was struggling to get my two files to communicate what part of the story the chracter was on. I was able to PATCH just fine, but GETTING was proving difficult. So, I decided to 'hack' my through it to get the product working.

Overall I am pleased with my site. I would improve upon the gamelogic. I want to sepearte the file from the characters Api file where it currently resides. I also want to provide the user more choice, instead of typing in a number, instead being able to type in a command. I would also like to add an inventory tracker so they can use items throughout the story.




```
User Stories

As a user I want to be able to sign in
As a user I want to be able to sign up
As a user I want to be able to change password
As a user I want to be able to sign out
As a user I want to be able to create a character
As a user I want to be able to view all my characters
As a user I want to be able to view one of my characters
As a user I want to be able to delete one of my characters
As a user I want to be able to change one of my characters names
As a user I don't want other users to be able to access my characters
As a user I want to be greeted by my characters name (when I sign in)
As a user I want to be able to play a unique choose your own adventure game for my new character.
```


[wireframe](https://media.git.generalassemb.ly/user/23013/files/e3ed1d80-f023-11e9-85b8-b4185d7ee7af)
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install dependencies with npm install.

## Built With

* [Javascript](https://www.javascript.com/) - The main game engine
* [Jquery](https://jquery.com/) - The main library used

## Contributing

Please read [CONTRIBUTING.md](https://github.com/HajimeNoJosh/project-2-api-client/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Joshuah Martin** - *Back End API and Front End Logic* - [HajimeNoJosh](https://github.com/HajimeNoJosh)
* **CSS credits** to  [Chris22smith](https://twitter.com/chris22smith) for his FallOut pipboy design
* **CSS credits continued** to [Pauline Masigla](https://github.com/pamasigla) who helped make it look more terminal like
## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
