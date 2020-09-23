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

const startTime = 120;
let time = startTime;
let age = 1;

//______________________STEP 1____________________

//---Add listener to begin button in html & prompt

$('#start-button').on('click', function(){
 zenBlock.nameTomagotchi();
 zenBlock.colorTomagotchi();
 zenBlock.hungerTomagotchi();
/* sleepinessTomagotchi() */
 startTimer(); 
 $('start-button').off('click');

});

$('#metric-hunger').on('click', function(){
      zenBlock.incrementHunger();
    $('#metric-hunger').text(`Hunger: ${zenBlock.hunger}`);
});

//______________________STEP 2____________________
//make timer for levels

const startTimer = function () {
    const timer = setInterval(function() {
        if (time === 0) {
            clearInterval(timer);
            //increase age
            age++;
            $('#age').text(`Age: ${age}`)
            Age();
            return;
        
        }
        time--;
        $('#timer').text(`Countdown: ${time}s`);
    }, 1000);
}

//______________________STEP 3____________________
//Levels and reset timer

const Age = function() {
    if (age > 5) {
        alert(`${zenBlock.name} has died of old age. Refresh to start over!`)
    } else {
        time = Math.floor(startTime*age);
        $('#timer').text(`Countdown: ${time}s`);
        //increase age
        alert(`${zenBlock.name} is one year older!`)
        startTimer();
    }
}
 
//______________________STEP 4____________________

//---Make Block Tomagotchi - instantiate from class

//__________________PARENT CLASS__________________

class Square {
    constructor (name, color, hunger, sleepiness, meditation, play, age) {
        this.name = name,
        this.color = color,
        this.hunger = hunger,
        this.sleepiness = sleepiness,
        this.meditation = meditation,
        this.play = play
    }
};

class Tomagotchi extends Square {
    constructor(name, color, hunger, sleepiness, meditation, play) {
        super (name, color, hunger, sleepiness, meditation, play)
    }
    nameTomagotchi(promptName) {
        this.name = prompt("Welcom to ZenBlock....etc...To proceed type a name for your ZenBlock Tomagotchi below.")
    }
    colorTomagotchi() {
        const colors = ['blue', 'red', 'green', 'violet'];
        this.color = Math.floor(Math.random() * colors.length);
        return this.color;
        //not working get color
    }  

    hungerTomagotchi() { 
        const randomHunger = Math.floor(Math.random() * 10);
        this.hunger = randomHunger;
        return this.hunger;
    }

    incrementHunger() {
        this.hunger += 1
        return this.hunger
    }


   /*  sleepinessTomagotchi() {
        this.sleepiness = randomSleepiness
        const randomSleepiness = Math.floor(Math.random() * 10); */
         //need to connect to button "NITE NITE. Remember to way me up in the morning by clicking the button again!" "Good Morning!"-subtract 1 pt
   /*  }
    meditationTomagotchi() { 
        this.meditation = randomMeditation
        const randomMeditation = Math.floor(Math.random() * 10);
        //need to connect to button to subject one point every time button is clicked/30 meditation
    }
    play() { 
        this.play = 
        alert('Let\'s go for a block around the block')
        //connect to animation
    }  */
}; 

const zenBlock = new Tomagotchi (); 










