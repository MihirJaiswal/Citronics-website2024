
const slider= document.querySelector('.slider');
const innerSlider = document.querySelector('.slide-track');
let x;
let startx;
let pressed = false;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX- innerSlider.offsetLeft;
    slider.style.cursor= "grabbing";
});

slider.addEventListener("mouseenter", ()=>{
    slider.style.cursor= "grab";
});

slider.addEventListener("mouseup", ()=>{
    slider.style.cursor= "grab";
});

window.addEventListener("mouseup", ()=>{
    pressed= false;
});

slider.addEventListener("mousemove", (e)=>{
    if(!pressed) return;
    x= e.offsetX;
    console.log(x);

    innerSlider.style.left= `${x-startx}px` ;
    checkboundary();
});

function checkboundary(){

    let outer= slider.getBoundingClientRect();
    let inner= innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left)>0){
        innerSlider.style.left= "0px"
    }
    else if(inner.right < outer.right){
        innerSlider.style.left= `-${inner.width-outer.width}px`
    }

}


function checkboundary(){

    let outer= slider.getBoundingClientRect();
    let inner= innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left)>0){
        innerSlider.style.left= "0px"
    }
    else if(inner.right < outer.right){
        innerSlider.style.left= `-${inner.width-outer.width}px`
    }

}

var countDownDate = new Date("feb 25, 2024 00:00:00").getTime();

var y = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
  

  if(distance < 0) {
    clearInterval(y);
    document.querySelector("#days").innerHTML = 0;
    document.querySelector("#hours").innerHTML = 0;
    document.querySelector("#minutes").innerHTML = 0;
    document.querySelector("#seconds").innerHTML = 0;
  }

}, 1000);




window.onload = function() {
  gsap.from("#myVideo", {
    opacity: 0,
    duration: 1,
    delay: 1,
    x: 80
  });

  gsap.from("#stats", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 80
  }); 
};


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => { 
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active'); 
}

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('visi');
        } else {
            entry.target.classList.remove('visi');
        }
    })
})

const hiddenElements = document.querySelectorAll('.notv');
hiddenElements.forEach((el) => {
    observers.observe(el);
})



const productButtons = document.querySelectorAll(".eventSelected");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const services = document.querySelectorAll(".service-info");
const form = document.querySelector(".form");

productButtons.forEach(button => {
  button.addEventListener("click", () => {
    payment.style.display = "flex";
    services.forEach(service => {
      service.style.filter = "blur(8px)";
    });
  
  });
});

close.addEventListener("click", () => {
  payment.style.display = "none";
  services.forEach(service => {
    service.style.filter = "blur(0px)";
  });
 

});


let eventname = document.querySelector("#event-name")
let eventdescription = document.querySelector("#event-description")
let prizeMoney = document.querySelector("#prize-money")
let participationFees = document.querySelector("#participation-fees")
let eventImage = document.querySelector("#event-image")
let roboRace = document.querySelector("#Robo-race")


roboRace.addEventListener("click", () => {
  eventname.innerHTML = "Robo Race"
  eventdescription.innerHTML = "Robo Race: Autonomous cars compete in high-speed circuits, showcasing innovation and precision in futuristic racing events."
  prizeMoney.innerHTML = "2000"
  participationFees.innerHTML = "1000"
  eventImage.src = "assests/roboRace.jpg"
})

const roboWar = document.querySelector("#Robo-war")

roboWar.addEventListener("click", () => {
  eventname.innerHTML = "Robo War"
  eventdescription.innerHTML = "Robo War: Fierce battles unfold as armed robotic Warriors clash in intense contests of engineering innovation."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})


let Line = document.querySelector("#Line")

Line.addEventListener("click", () => {
  eventname.innerHTML = "Line Follower"
  eventdescription.innerHTML = "Line Follower: A line follower robot is designed to follow a line on a track. It can detect obstacles and avoid them."
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/linefollower.jpg"
})

let Maze = document.querySelector("#Maze")

Maze.addEventListener("click", () => {
  eventname.innerHTML = "Maze Solver"
  eventdescription.innerHTML = "Maze Solver: A maze solver robot is designed to solve a maze. It can detect obstacles and avoid them."
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/mazeSolver.jpg"
})
 

let Code = document.querySelector("#Code")

Code.addEventListener("click", () => {
  eventname.innerHTML = "Code Hunter"
  eventdescription.innerHTML = "Code Hunter: A tech-centric pursuit where skilled individuals solve intricate puzzles, hunt bugs, and crack codes."
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/codehunter.jpeg"
})
 

let Bug = document.querySelector("#Bug")

Bug.addEventListener("click", () => {
  eventname.innerHTML = "Beat the Bug"

  eventdescription.innerHTML = "Beat the Bug: A strategic challenge where participants work to outsmart and overcome digital glitches and obstacles."
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "1000"
  eventImage.src = "assests/beatTheBug.jpg"
})

let Best = document.querySelector("#googler")

Best.addEventListener("click", () => {
  eventname.innerHTML = "Best Googler"
  eventdescription.innerHTML = "Best Googler: A title awarded to individuals who excel in utilizing Google's vast resources to find precise information efficiently."
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "3000"
  eventImage.src = "assests/bestGoogler.jpg"
})

let Simon = document.querySelector("#Simon")

Simon.addEventListener("click", () => {
  eventname.innerHTML = "Simon Game"
  eventdescription.innerHTML = "Simon Game: A memory game that tests your memory skills. "
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/simonGame.jpg"
})



let musical = document.querySelector("#musical")

musical.addEventListener("click", () => {
  eventname.innerHTML = "Musical Chairs"
  eventdescription.innerHTML = "Musical chairs: Whirling melodies guide the dance of fleeting seats, testing agility and rhythm in laughter-filled competition."
  prizeMoney.innerHTML = "100"
  participationFees.innerHTML = "400"
  eventImage.src = "assests/musicalChairs.jpg"
})

let pass = document.querySelector("#pass")

pass.addEventListener("click", () => {
  eventname.innerHTML = "Pass the wires"
  eventdescription.innerHTML = "Pass the wires: A game where participants work to pass wires through wires."
  prizeMoney.innerHTML = "100"
  participationFees.innerHTML = "400"
  eventImage.src = "assests/passTheRope.jpg"
})
 

let music = document.querySelector("#music")

music.addEventListener("click", () => {
  eventname.innerHTML = "Music Voice"

  eventdescription.innerHTML = "Players circle chairs, music plays, scramble for seats—fun, suspenseful, last one standing wins the round."
  prizeMoney.innerHTML = "300"
  participationFees.innerHTML = "900"
  eventImage.src = "assests/musicVoice.jpg"
})


let lips = document.querySelector("#lips")

lips.addEventListener("click", () => {
  eventname.innerHTML = "Lips Don't Lie"
  eventdescription.innerHTML = "Lips Don't Lie: A captivating phrase expressing the honesty and power of unspoken emotions through actions."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/lipsDontLie.jpg"
})


let CPL = document.querySelector("#CPL")

CPL.addEventListener("click", () => {
  eventname.innerHTML = "Citro Premier League"
  eventdescription.innerHTML = "Citro Premier League Cricket: A spirited campus cricket league fostering talent, teamwork, and spirited competition among students."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/cricket.jpeg"
})

let Chess = document.querySelector("#Chess")

Chess.addEventListener("click", () => {
  eventname.innerHTML = "Chess"
  eventdescription.innerHTML = "Chess: Strategic battlefield on 64 squares, where intellect prevails in the timeless duel of kings and queens."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/chessEvent.jpg"
})


let Badminton = document.querySelector("#Badminton")

  Badminton.addEventListener("click", () => {
  eventname.innerHTML = "Badminton"
  eventdescription.innerHTML = "Badminton: Fast-paced court sport of smashes and rallies, demanding agility, precision, and tactical finesse for triumph."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/badmintton.jpg"
})

let Tug = document.querySelector("#Tug")

Tug.addEventListener("click", () => {
  eventname.innerHTML = "Tug of War"
  eventdescription.innerHTML = "Tug of War: A gripping contest of strength and teamwork, where opposing forces strive for supremacy."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/tugOfWar.jpg"
})



let Rangoli = document.querySelector("#Rangoli")

Rangoli.addEventListener("click", () => {
  eventname.innerHTML = "Rangoli"
  eventdescription.innerHTML = "Rangoli: A unique art form, combining the beauty of traditional Indian art with modern technology."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/rangoli.jpg"
})
  

let jenga = document.querySelector("#jenga")

jenga.addEventListener("click", () => {
  eventname.innerHTML = "Jenga"
  eventdescription.innerHTML = "Jenga: A classic game of stacking blocks, with a focus on speed, accuracy, and strategic play."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/jenga.jpg"
})
  

let Plank = document.querySelector("#Plank")

Plank.addEventListener("click", () => {
  eventname.innerHTML = "Plank"
  eventdescription.innerHTML = "Plank: Core-strengthening exercise, holding a position for endurance, sculpting strength and stability in mere minutes."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/plank.jpg"
})

let Ballon = document.querySelector("#Ballon")

Ballon.addEventListener("click", () => {
  eventname.innerHTML = "Ballon cup"
  eventdescription.innerHTML = "Ballon cup: A classic game of throwing a ball, with a focus on speed, accuracy, and strategic play."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/balloonCup.jpg"
})
  
let youth = document.querySelector("#youth")

youth.addEventListener("click", () => {
  eventname.innerHTML = "Youth Got Talent"
  eventdescription.innerHTML = "Youth Got Talent: A creative competition for young talent, where participants showcase their creativity and problem-solving skills."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/youthGotTalent.jpg"
})
 

let money = document.querySelector("#money")

money.addEventListener("click", () => {
  eventname.innerHTML = "Money Heist"
  eventdescription.innerHTML = "Money Heist: A classic crime drama, with a focus on the power of the law and the power of the money."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/moneyHeist.jpeg"
})

let redGreen = document.querySelector("#redGreen")

redGreen.addEventListener("click", () => {
  eventname.innerHTML = "Red Light Green Light"
  eventdescription.innerHTML = "Red Light Green Light: inspired from the k-drama squid game."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/redLightGreenLight.jpg"
})

let DSLR = document.querySelector("#DSLR")

DSLR.addEventListener("click", () => {
  eventname.innerHTML = "DSLR photography"
  eventdescription.innerHTML = "DSLR Photography: Capturing life's moments with precision and creativity, blending technology and art for stunning visuals."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/DSLR.jpeg"
})

let Reel = document.querySelector("#Reel")

Reel.addEventListener("click", () => {
  eventname.innerHTML = "Reel Making"
  eventdescription.innerHTML = "Reel Making: Crafting visual stories, combining imagination and skill to weave compelling narratives through cinematic artistry."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/reelMaking.jpg"
})

let Phone = document.querySelector("#Phone")

Phone.addEventListener("click", () => {
  eventname.innerHTML = "Phone photography"
  eventdescription.innerHTML = "Phone Photography: Unleashing creativity with a pocket-sized lens, transforming everyday moments into captivating visual stories effortlessly."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/phonePhoto.jpg"
})

let Roadies = document.querySelector("#Roadies")

Roadies.addEventListener("click", () => {
  eventname.innerHTML = "Roadies"
  eventdescription.innerHTML = "Roadies: Adventurous reality show testing grit and resilience, challenging contestants through thrilling tasks on a road-tripping journey."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roadies.jpg"
})

 let CAD = document.querySelector("#CAD")

CAD.addEventListener("click", () => {
  eventname.innerHTML = "Auto CAD"
  eventdescription.innerHTML = "Auto CAD: Create stunning 2D and 3D designs with precision and creativity, combining technology and art for stunning visuals."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/CAD.jpg"
})
 

let Kart = document.querySelector("#Kart")

Kart.addEventListener("click", () => {
  eventname.innerHTML = "Fun Kard"
  eventdescription.innerHTML = "Fun Kart: A fun-filled adventure game where participants race to reach the finish line on a kart track."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/funKart.jpg"
})
 

let Cycle = document.querySelector("#Cycle")

Cycle.addEventListener("click", () => {
  eventname.innerHTML = "Slow Cycle"
  eventdescription.innerHTML = "Slow Cycle: A fun-filled adventure game where participants race to reach the finish line on a bike track last."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/slowCycle.jpg"
})
  
let Dance = document.querySelector("#Dance")

Dance.addEventListener("click", () => {
  eventname.innerHTML = "Dance"
  eventdescription.innerHTML = "Dance: Expressive art form transcending cultures, conveying emotions through rhythmic movements, uniting hearts with universal language."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/dance.png"
})

let Mic = document.querySelector("#Mic")

Mic.addEventListener("click", () => {
  eventname.innerHTML = "Open Mic"
  eventdescription.innerHTML = "Open Mic: A platform for artistic expression, where voices, music, and stories resonate freely, embracing creativity and diversity."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/openMic.jpg"
})

let Band = document.querySelector("#Band")

Band.addEventListener("click", () => {
  eventname.innerHTML = "Band War"
  eventdescription.innerHTML = "Band War: Electrifying showdown of musical prowess, where diverse sounds clash, harmonize, and vie for audience acclaim."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/bandWar.jpg"
})

let Draw = document.querySelector("#Draw")

Draw.addEventListener("click", () => {
  eventname.innerHTML = "Draw Up"
  eventdescription.innerHTML = "Draw up: A creative convergence where art and civic engagement unite, illustrating community values through visual expressions."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/drawUp.jpg"
})

let Mania = document.querySelector("#Mania")

Mania.addEventListener("click", () => {
  eventname.innerHTML = "Bridge Mania"
  eventdescription.innerHTML = "Bridge Mania: An exciting competition challenging engineering and creativity, as teams design and build innovative bridge structures."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/bridgeMania.jpg"
})

let Arc = document.querySelector("#Arc")

Arc.addEventListener("click", () => {
  eventname.innerHTML = "Arc Bridge"
  eventdescription.innerHTML = "Arc Bridge: Engineering marvel, arching gracefully over obstacles, combining strength and aesthetics for seamless structural elegance."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/arcBridge.jpg"
})

let Rampwalk = document.querySelector("#Rampwalk")

Rampwalk.addEventListener("click", () => {
  eventname.innerHTML = "Rampwalk"
  eventdescription.innerHTML = "Ramp Walk: Fashion's dynamic showcase, where models strut with confidence, embodying style and charisma on the runway."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/rampWalk.jpeg"
})

let Treasure = document.querySelector("#Treasure")

Treasure.addEventListener("click", () => {
  eventname.innerHTML = "Treasure Hunt"
  eventdescription.innerHTML = "Treasure Hunt: Thrilling adventure quest, deciphering clues, solving puzzles, and exploring to discover hidden treasures and secrets."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/treasureHunt.png"
})

let Chef = document.querySelector("#Chef")

Chef.addEventListener("click", () => {
  eventname.innerHTML = "Master Chef"
  eventdescription.innerHTML = "Master Chef: Culinary competition showcasing top chefs' skill, creativity, and innovation as they craft gastronomic delights under pressure."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/masterChef.jpg"
})