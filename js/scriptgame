/* Een spelLetje waarbij je kan klikken op (of slepen met) de objecten in de woonkamer. Pas op dat je de moeder
 niet al te boos maakt. Rechtsboven zie je een boosheid meter, als die vol is, is het game over.*/


console.log("test123");

var text = document.querySelector("#gametext");
var livingroom = document.querySelector("#huiskamer");


// klik op voederbak en hond //

var bowl = document.querySelector("#img-bowl");
var dog = document.querySelector("#img-hond");
var dogbed = document.querySelector("#img-bed");
var blaf = new Audio("sounds/dog-bark-sound-effect-hd-no-copyright.mp3");
var scheet = new Audio("sounds/pooping-sound-effects-all-sounds.mp3");
var eew = new Audio("sounds/eew.mp3");
var dogStomach = "empty";
var dogActivity = "chillen";

function voeren() {
    bowl.src = "images/Asset 28filled-bowl.png";
    dog.src = "images/Asset 29happy-dog.png";
    blaf.play("sounds/dog-bark-sound-effect-hd-no-copyright.mp3");
    dogStomach = "full";
    dogActivity = "eten";
    text.textContent = "Yay! Food! Tip: try clicking on the dog now."
}

bowl.addEventListener("click", voeren);


function poepen() {
    if (dogStomach == "full") {
        dog.src = "images/Asset 30pooping-dog.png";
        scheet.play("sounds/pooping-sound-effects-all-sounds.mp3");
        eew.play("sounds/eew.mp3");
        bowl.src = "images/Asset 20bowl.png";
        family.src = "images/Asset 33angry-mom.png";
        dogStomach = "empty";
        dogActivity = "poepen";
        text.textContent = "Oof, that stinks!"
        text.style.left = "350px";
        bozer();
    }
}

dog.addEventListener("click", poepen);


function liggen() {
    dog.src = "images/sleepingdog.png";
    family.src = "images/Asset 34default-fam.png";
    dogActivity = "chillen";
    blijer();
}

dogbed.addEventListener("click", liggen);


function aaien() {
    if (dogActivity == "chillen" || dogActivity == "eten") {
        dog.classList.add("aaien");
    } else {
        dog.classList.remove("aaien");
    }

    if (dogActivity == "feesten") {
        dog.classList.add("jump");
    }
}

dog.addEventListener("mouseenter", aaien);

function stopAaien() {
    dog.classList.remove("aaien");
    dog.classList.remove("jump");
}

dog.addEventListener("mouseout", stopAaien);


// klik op tv //

var tv = document.querySelector("#img-tv");
var tvaudio = new Audio('sounds/sound-effect-minion-laugh.mp3');
var tvscherm = "uit";

function tvKijken() {
    if (tvscherm == "uit") {
        family.src = "images/Asset 35watchingtv-fam.png";
        tv.src = "images/tvaan.png";
        tvscherm = "aan";
        tvaudio.play("sounds/sound-effect-minion-laugh. (2)mp3").loop;
        bozer();
    } else {
        family.src = "images/Asset 34default-fam.png";
        tv.src = "images/tvSchermafbeelding 2022-02-28 124425.png";
        tvscherm = "uit";
        tvaudio.pause("sounds/sound-effect-minion-laugh.mp3");
    }
}

tv.addEventListener("click", tvKijken);


// klik op lichtknop //

var licht = document.querySelector("#img-lightswitch");
var lichtknop = "uit";
var discobal = document.querySelector("#img-discoball");
var lefreak = new Audio("sounds/Le Freak.mp3");

function feesten() {
    if (lichtknop == "uit") {
        licht.src = "images/switchon.png";
        family.src = "images/Asset 33angry-mom.png";
        discobal.style.visibility = "visible";
        lefreak.play("sounds/Le Freak.mp3");
        dog.src = "images/Asset 29happy-dog.png";
        dogActivity = "feesten";
        livingroom.classList.add("discolight");
        lichtknop = "aan";
        bozer();
    } else {
        licht.src = "images/switchoff.png";
        family.src = "images/Asset 34default-fam.png";
        discobal.style.visibility = "hidden";
        livingroom.classList.remove("discolight");
        lefreak.pause("sounds/Le Freak.mp3");
        lichtknop = "uit";
    }
}

licht.addEventListener("click", feesten);


// klik op stofzuiger //

var stofzuiger = document.querySelector("#img-stofzuiger");
var stofzuigerSound = new Audio("sounds/VacuumCleaner.mp3");
var stofzuigerKnop = "uit";

function stofzuigen() {
    if (stofzuigerKnop == "uit") {
        stofzuigerSound.play("sounds/VacuumCleaner.mp3");
        stofzuiger.style.right = "30px";
        stofzuigerKnop = "aan";
        blijer();
    } else {
        stofzuigerSound.pause("sounds/VacuumCleaner.mp3");
        stofzuigerKnop = "uit";
    }
}

stofzuiger.addEventListener("click", stofzuigen);


// klik op plant //

var plant = document.querySelector("#img-plant");
var plantStatus = "staat";
var breken = new Audio("sounds/Vase.mp3");

function omgooien() {
    if (plantStatus == "staat") {
        plantStatus = "gevallen";
        plant.style.transform = "rotate(90deg)";
        family.src = "images/Asset 33angry-mom.png";
        breken.play("sounds/Vase.mp3");
        text.textContent = "Whoops, that vase is definitly broken.";
        bozer();
    }
}

plant.addEventListener("click", omgooien);


// klik op handtas //

var tas = document.querySelector("#img-tas");
var ugh = new Audio("sounds/ugh.mp3");

function touchBag() {
    ugh.play("sounds/ugh.mp3");
    bozer();
    text.textContent = "She clearly doesn't like it when people nose through her purse";
    text.style.left = "350px";
}

tas.addEventListener("click", touchBag);


// klik op familie //

var family = document.querySelector('#img-fam');
var groet = new Audio("sounds/'Hi!' sound effect.mp3");
var groet2 = new Audio("sounds/hi-man.mp3");

function familyGroet() {
    family.src = "images/Asset 30fam-groet.png";
    groet.play("sounds/'Hi!' sound effect.mp3");
    groet2.play("sounds/hi-man.mp3");
    blijer();
}

family.addEventListener("click", familyGroet);


// sleep en drop familie (Easteregg) //

function transformDog() {
    family.src = "images/Asset 26fam-dogs.png";
    blaf.play("sounds/dog-bark-sound-effect-hd-no-copyright.mp3");
    blijer();
}

family.addEventListener("dragend", transformDog);


// anger meter moeder //

var angermeter = document.querySelector("#angermeter");
var angerlevelMom = 0;
var gameover = document.querySelector("#gameover");
var startover = document.querySelector("#startover");
var scream = new Audio("sounds/scream.mp3");

angermeterImg = [
    "images/Asset 26angermeter.png",
    "images/Asset 27angermeter1.png",
    "images/Asset 28angermeter2.png",
    "images/Asset 29angermeter3.png",
    "images/Asset 33angermeter4.png",
    "images/Asset 32angermeter5.png"
]

function angermeterUpdate() {

    if (angerlevelMom == 1) {
        text.textContent = "Oh oh, that annoys the mother!"
        angermeter.src = angermeterImg[1];
        // of zonder array te gebruiken op deze manier zou het ook kunnen: //
        angermeter.src = "images/Asset 27angermeter1.png";
    } else if (angerlevelMom == 2) {
        angermeter.src = angermeterImg[2];
    } else if (angerlevelMom == 3) {
        angermeter.src = angermeterImg[3];
        text.textContent = "The mother is getting pretty angry.."
    } else if (angerlevelMom == 4) {
        angermeter.src = angermeterImg[4];
        text.textContent = "Watch out, her anger is about to burst! Tip: Clean up the room."
        text.style.left = "350px";
        text.style.top = "500px";
    } else if (angerlevelMom == 5) {
        angermeter.src = angermeterImg[5];
        gameover.style.visibility = "visible";
        startover.style.visibility = "visible";
        livingroom.classList.add("shaking");
        scream.play("sounds/scream.mp3");
    }
}

function bozer() {
    angerlevelMom = angerlevelMom + 1;
    angermeterUpdate();
}

function blijer() {
    angerlevelMom = angerlevelMom - 1;
    angermeterUpdate();
}
