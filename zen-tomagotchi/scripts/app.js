/* console.log('just do it'); */

//_______________ZenBlock Tomagotchi______________

//************************************************

//___________________Why Play?____________________

/* Zen block was created for individuals who want the experience of owning their own pet without all the hassle. It is an interactive game focused on the health and wellbeing of the user and pet! */

//___________________User Story___________________

/* As the maker of Zen Block Tomagotchi,, I wanted to create an application for individuals who suffer from anxiety and depression. This game allows for users to interact with a pet Tomagotchi. Allowing for a sense of connection through positive reinforcement and growth. 

This is not just a one-way street application. Zen Block Tomagotchi will also remind its user to eat, sleep, play, and meditate. This allows for a full circle user experience and will help individuals in their day-to-day living habits so that they stay balanced and healthy!  */

//___________________Psuedocode___________________

//---How will user be informed how to play? Pop-up on landing page welcoming user with directions and consequences to their actions.

//---How will user begin playing? There will be a start button that will then trigger a pop up that will allow the user to name their tomagotchi. Their zen avatar block will then appear in play mode on the screen.

//---How will user interact with avatar? There will be button to feed/water, meditate, play, ligths on/off and sleep (all will be on a 1-10 scale or y/n). There will also be metrics keeping track of hunger/thirst, sleepiness, play, meditation, and age. When avatar gets to a certain age/health it will morph. The avatar will die if certain metric levels are not met.

//---What are the specifications for tomagotchi morph/die? Morphing will require tomagotchi to stay alive for 2 minutes. A tomagotchi will die if hunger, play, meditation, and sleepiness hits 10.

//---What will morphed avatar look like? A block square will be added inside the tomagotchi

//---What will you use to keep track of 2 minutes of life. A timer will be used to morph avatar. 

//---Does the game end? Game ends when avatar dies.

//---What happens when game ends? Popup comes up stating avatar has died and game is over. 

//_________________Code Organization______________

//Global Variables
//Event Listeners
//Fuctions
//Event Listeners

//______________________STEP 1____________________

//---Add listener to begin button in html & prompt

$('button').on('click', function(){
/* console.log('Button works'); */
 zenBlock.nameTomagotchi();
/*  createTomagotchi(1);
 startTimer(); */
 $('button').off('click');
/*  setMorph(); */
});

//______________________STEP 2____________________

//---Make Block Tomagotchi - instantiate from class

//__________________PARENT CLASS__________________

class Square {
    constructor (name, color, health, sleepMode, meditation, play, age) {
        this.name = name,
        this.color = color,
        this.health = health,
        this.sleepMode = sleepMode,
        this.meditation = meditation,
        this.play = play,
        this.age = age
    }
};

class Tomagotchi extends Square {
    constructor(name, color, health, sleepMode, meditation, play, age) {
        super (name, color, health, sleepMode, meditation, play, age)
    }
    nameTomagotchi(promptName) {
        this.name = prompt("What would you like to name your ZenBlock Tomagotchi?")
    }
};

const zenBlock = new Tomagotchi (); 












