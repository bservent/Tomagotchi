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

 zenBlock.animationTomagotchi();

 document.getElementById("zen-mode")
 document.getElementById("zen-mode").style.visibility = "visible";

 document.getElementById("timer")
 document.getElementById("timer").style.visibility = "visible";

 document.getElementById("age")
 document.getElementById("age").style.visibility = "visible";

 document.getElementById("tomagotchi")
 document.getElementById("tomagotchi").style.visibility = "visible";

 zenBlock.hungerTomagotchi();
 $('#metric-hunger').text(`Hunger: ${zenBlock.hunger}`)

 zenBlock.sleepinessTomagotchi();                   
 $('#metric-sleepiness').text(`Sleepiness: ${zenBlock.sleepiness}`)

 zenBlock.playTomagotchi();
 $('#metric-play').text(`Play: ${zenBlock.play}`)
 
 startTimer(); 
 $('start-button').off('click');
 
});


$('#metric-hunger').on('click', function(){
      zenBlock.decrementHunger();
    $('#metric-hunger').text(`Hunger: ${zenBlock.hunger}`);
});

$('#metric-sleepiness').on('click', function(){
    zenBlock.decrementSleepiness();
  $('#metric-sleepiness').text(`Sleepiness: ${zenBlock.sleepiness}`);
});

$('#zen-mode').on('click', function(){
    zenBlock.changeBackColor();
});

$('#metric-play').on('click', function(){
    zenBlock.decrementPlay();
  $('#metric-play').text(`Play: ${zenBlock.play}`);
});




//______________________STEP 2____________________
//make timer for levels

const startTimer = function () {
    const timer = setInterval(function() {
        if (time === 0) {
            clearInterval(timer);
            //increase age
            age++;
            zenBlock.animationTomagotchi();
            $('#age').text(`Age: ${age}`)
            Age();
            return;
        
        }
        time--;
        if (zenBlock.hunger === 10 || zenBlock.sleepiness === 10 ||  zenBlock.play === 10) {
            zenBlock.incrementDeath();
        } 
        else if (time % 60 === 0) {
            zenBlock.hunger +=1 
            $('#metric-hunger').text(`Hunger: ${zenBlock.hunger}`);
            zenBlock.sleepiness +=1 
            $('#metric-sleepiness').text(`Sleepiness: ${zenBlock.sleepiness}`);
            zenBlock.meditation +=1
            $('#metric-meditation').text(`Meditation: ${zenBlock.meditation}`);
            zenBlock.play += 1
            $('#metric-play').text(`Play: ${zenBlock.play}`);
        }
        $('#timer').text(`Countdown: ${time}s`);
    }, 1000);
}

//______________________STEP 3____________________
//Levels and reset timer

const Age = function() {
    if (age > 5) {
        alert(`${zenBlock.name} has died of old age. Refresh to start over!`)            
    } else if 
    (zenBlock.hunger === 10 || zenBlock.sleepiness === 10 || zenBlock.play === 10) {
        zenBlock.incrementDeath();
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
    constructor (name, animation, hunger, sleepiness, meditation, play) {
        this.name = name,
        this.animation = animation,
        this.hunger = hunger,
        this.sleepiness = sleepiness,
        this.meditation = meditation,
        this.play = play
    }
};

class Tomagotchi extends Square {
    constructor(name, animation, hunger, sleepiness, meditation, play) {
        super (name, animation, hunger, sleepiness, meditation, play)
        this.animations = [
            "https://media.giphy.com/media/No3Q2COl8SEnu/giphy.gif",
            "https://media.giphy.com/media/oymLI9X9aKdcG48kVi/giphy.gif",
            "https://media.giphy.com/media/Xd7QqFPv4IVAz8dnog/giphy.gif", 
            "https://media.giphy.com/media/QXUEh5XL3YzAyq6dFQ/giphy-downsized-large.gif",
            "https://media.giphy.com/media/3oz8xKWgHhcq3LtAKA/giphy.gif"]
    }
    nameTomagotchi(promptName) {
        this.name = prompt("Welcom to ZenBlock....etc...To proceed type a name for your ZenBlock Tomagotchi below.")
    }
    animationTomagotchi() {
        //const animations = ["https://media.giphy.com/media/No3Q2COl8SEnu/giphy.gif", "https://media.giphy.com/media/oymLI9X9aKdcG48kVi/giphy.gif", "https://media.giphy.com/media/Xd7QqFPv4IVAz8dnog/giphy.gif", "https://media.giphy.com/media/QXUEh5XL3YzAyq6dFQ/giphy-downsized-large.gif", "https://media.giphy.com/media/3oz8xKWgHhcq3LtAKA/giphy.gif"];
        const randomIndex = Math.floor(Math.random() * this.animations.length);
        this.animation = this.animations[randomIndex];
        document.getElementsByClassName("block")[0].src = this.animation;
        document.getElementsByClassName("block")[0].style.display = "block";
        this.animations.splice(randomIndex, 1)
        return this.animation;
    }  
    hungerTomagotchi() { 
        const randomHunger = Math.floor(Math.random() * 10);
        this.hunger = randomHunger;
        document.getElementById("metric-hunger").attr = this.hunger;
        document.getElementById("metric-hunger").style.visibility = "visible";
        return this.hunger;
    }
    decrementHunger() {
        if (this.hunger > 0) {this.hunger -= 1}
        return this.hunger
    }
    sleepinessTomagotchi() {
        const randomSleepiness = Math.floor(Math.random() * 10);
        this.sleepiness = randomSleepiness;
        document.getElementById("metric-sleepiness").attr = this.sleepiness;
        document.getElementById("metric-sleepiness").style.visibility = "visible";
        return this.sleepiness;
    }
    decrementSleepiness() {
        if (this.sleepiness > 0) {this.sleepiness -= 1}
        return this.sleepiness
    }
/*     meditationTomagotchi() { 
        const randomMeditation = Math.floor(Math.random() * 10);
        this.meditation = randomMeditation;
        return this.meditation;
    }
    decrementMeditation() {
        if (this.meditation > 0) {this.meditation -= 1}
        return this.meditation
    } */
    changeBackColor() {
        document.body.style.background = 'black';
        setTimeout(function(){
        document.body.style.background = 'white';
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1599766276214-46e0152236d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80)"
        }, 30000);
    }
    playTomagotchi() { 
        const randomPlay = Math.floor(Math.random() * 10);
        this.play = randomPlay;
        document.getElementById("metric-play").attr = this.play;
        document.getElementById("metric-play").style.visibility = "visible";
        return this.play;
    } 
    decrementPlay() {
        if (this.play > 0) {this.play -= 1}
        return this.play
    } 
    incrementDeath() {
        if (this.hunger === 10 || this.sleepiness === 10 || this.meditation === 10|| this.play === 10) {
            prompt(`${this.name} HAS DIED! PLEASE GO MEDITATE AND TRY AGAIN!`)
        } 
    }
}; 

const zenBlock = new Tomagotchi (); 










