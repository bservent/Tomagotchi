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
let level = 1;


//______________________STEP 1____________________

//---Add listener to begin button in html & prompt

$('button').on('click', function(){
 zenBlock.nameTomagotchi();
/*  zenBlock.color(); */
 startTimer(); 
 $('button').off('click');
/*  onLevel(); */
});

//______________________STEP 2____________________
//make timer for health and age

const startTimer = function () {
    const timer = setInterval(function() {
        if (time === 0) {
            clearInterval(timer);
            //increase level
            level++;
            $('#level').text(`Level: ${level}`)
            onLevel();
            return;
        
        }
        time--;
        $('#timer').text(`Countdown: ${time}s`);
    }, 1000);
}

const onLevel = function() {
    if (level > 3) {
        alert(`${zenBlock.name} has died of old age. Refresh to start over!`)
    } else {
        time = Math.floor(startTime*level);
        $('#timer').text(`Countdown: ${time}s`);
        //increase age
        alert(`${zenBlock.name} is one year older!`)
        startTimer();
    }
}
 
//______________________STEP 3____________________

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
        this.name = prompt("Welcom to ZenBlock....etc...To proceed type a name for your ZenBlock Tomagotchi below.")
    }
  /*   colorTomagotchi() {
        this.colors = ['blue', 'red', 'green', 'violet'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    } */
  /*      health() {start with 10 and decrements every minute 

    }
    sleepMode() {button "NITE NITE. Remember to way me up in the morning by clicking the button again!" "Good Morning!"

    }
    meditation() { adds one point to health

    }
    play() { adds one point to health

    } */

}; 

const zenBlock = new Tomagotchi (); 










