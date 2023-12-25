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
  eventImage.src = "assests/roboWar.png"
})

let Maze = document.querySelector("#Maze")

Maze.addEventListener("click", () => {
  eventname.innerHTML = "Maze Solver"
  eventdescription.innerHTML = "Maze Solver: A maze solver robot is designed to solve a maze. It can detect obstacles and avoid them."
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})

let Pick = document.querySelector("#Pick")

Pick.addEventListener("click", () => {
  eventname.innerHTML = "Pick Place"
  eventdescription.innerHTML = "Pick Place: A pick and place robot is designed to pick and place objects on a table"
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})

let Electronic = document.querySelector("#Electronic")

Electronic.addEventListener("click", () => {
  eventname.innerHTML = "Electronic Junk Yard"
  eventdescription.innerHTML = "Electronic Junk Yard: A electronic junk yard robot is designed to collect electronic junk."
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})
 

let Code = document.querySelector("#Code")

Code.addEventListener("click", () => {
  eventname.innerHTML = "Code Hunter"
  eventdescription.innerHTML = "Code Hunter: A tech-centric pursuit where skilled individuals solve intricate puzzles, hunt bugs, and crack codes."
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})

let Quiz = document.querySelector("#Quiz")

Quiz.addEventListener("click", () => {
  eventname.innerHTML = "Quizohile"
  eventdescription.innerHTML = "Quizohile: A quiz game that tests your knowledge."
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})
 

let Bug = document.querySelector("#Bug")

Bug.addEventListener("click", () => {
  eventname.innerHTML = "Beat the Bug"

  eventdescription.innerHTML = "Beat the Bug: A strategic challenge where participants work to outsmart and overcome digital glitches and obstacles."
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "1000"
  eventImage.src = "assests/roboWar.png"
})

let Best = document.querySelector("#googler")

Best.addEventListener("click", () => {
  eventname.innerHTML = "Best Googler"
  eventdescription.innerHTML = "Best Googler: A title awarded to individuals who excel in utilizing Google's vast resources to find precise information efficiently."
  prizeMoney.innerHTML = "500"
  participationFees.innerHTML = "3000"
  eventImage.src = ""
})

let Simon = document.querySelector("#Simon")

Simon.addEventListener("click", () => {
  eventname.innerHTML = "Simon Game"
  eventdescription.innerHTML = "Simon Game: A memory game that tests your memory skills. "
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})


let jumble = document.querySelector("#jumble")

jumble.addEventListener("click", () => {
  eventname.innerHTML = "Jumble Keys"
  eventdescription.innerHTML = "Jumble Keys: A jumble keys game where participants work to solve puzzles."
  prizeMoney.innerHTML = "200"
  participationFees.innerHTML = "2000"
  eventImage.src = "assests/roboWar.png"
})
 

let musical = document.querySelector("#musical")

musical.addEventListener("click", () => {
  eventname.innerHTML = "Musical Chairs"
  eventdescription.innerHTML = "Musical chairs: Whirling melodies guide the dance of fleeting seats, testing agility and rhythm in laughter-filled competition."
  prizeMoney.innerHTML = "100"
  participationFees.innerHTML = "400"
  eventImage.src = "assests/roboWar.png"
})

let pass = document.querySelector("#pass")

pass.addEventListener("click", () => {
  eventname.innerHTML = "Pass the wires"
  eventdescription.innerHTML = "Pass the wires: A game where participants work to pass wires through wires."
  prizeMoney.innerHTML = "100"
  participationFees.innerHTML = "400"
  eventImage.src = "assests/roboWar.png"
})
 

let music = document.querySelector("#music")

music.addEventListener("click", () => {
  eventname.innerHTML = "Music Voice"

  eventdescription.innerHTML = "Players circle chairs, music plays, scramble for seats—fun, suspenseful, last one standing wins the round."
  prizeMoney.innerHTML = "300"
  participationFees.innerHTML = "900"
  eventImage.src = "assests/roboWar.png"
})

let booth = document.querySelector("#booth")

booth.addEventListener("click", () => {
  eventname.innerHTML = "selfie booth"
  eventdescription.innerHTML = "Selfie booth: A trendy space to capture moments, with props, lights, and backdrops for personalized snapshots."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let lips = document.querySelector("#lips")

lips.addEventListener("click", () => {
  eventname.innerHTML = "Lips Don't Lie"
  eventdescription.innerHTML = "Lips Don't Lie: A captivating phrase expressing the honesty and power of unspoken emotions through actions."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})


let CPL = document.querySelector("#CPL")

CPL.addEventListener("click", () => {
  eventname.innerHTML = "Citro Premier League"
  eventdescription.innerHTML = "Citro Premier League Cricket: A spirited campus cricket league fostering talent, teamwork, and spirited competition among students."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Chess = document.querySelector("#Chess")

Chess.addEventListener("click", () => {
  eventname.innerHTML = "Chess"
  eventdescription.innerHTML = "Chess: Strategic battlefield on 64 squares, where intellect prevails in the timeless duel of kings and queens."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/chessEvent.jpg"
})

let Carrom = document.querySelector("#Carrom")

Carrom.addEventListener("click", () => {
  eventname.innerHTML = "Carrom"
  eventdescription.innerHTML = "Carrom: Flick, strike, and pocket precision coins on a smooth board, blending skill and strategy for victory."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Badminton = document.querySelector("#Badminton")

  Badminton.addEventListener("click", () => {
  eventname.innerHTML = "Badminton"
  eventdescription.innerHTML = "Badminton: Fast-paced court sport of smashes and rallies, demanding agility, precision, and tactical finesse for triumph."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Tug = document.querySelector("#Tug")

Tug.addEventListener("click", () => {
  eventname.innerHTML = "Tug of War"
  eventdescription.innerHTML = "Tug of War: A gripping contest of strength and teamwork, where opposing forces strive for supremacy."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})



let Rangoli = document.querySelector("#Rangoli")

Rangoli.addEventListener("click", () => {
  eventname.innerHTML = "Rangoli"
  eventdescription.innerHTML = "Rangoli: A unique art form, combining the beauty of traditional Indian art with modern technology."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})
  

let tennis = document.querySelector("#tennis")

tennis.addEventListener("click", () => {
  eventname.innerHTML = "Office Tennis"
  eventdescription.innerHTML = "Office Tennis: A classic game of tennis, with a focus on speed, accuracy, and strategic play."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let jenga = document.querySelector("#jenga")

jenga.addEventListener("click", () => {
  eventname.innerHTML = "Jenga"
  eventdescription.innerHTML = "Jenga: A classic game of stacking blocks, with a focus on speed, accuracy, and strategic play."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})
  

let Plank = document.querySelector("#Plank")

Plank.addEventListener("click", () => {
  eventname.innerHTML = "Plank"
  eventdescription.innerHTML = "Plank: Core-strengthening exercise, holding a position for endurance, sculpting strength and stability in mere minutes."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Ballon = document.querySelector("#Ballon")

Ballon.addEventListener("click", () => {
  eventname.innerHTML = "Ballon cup"
  eventdescription.innerHTML = "Ballon cup: A classic game of throwing a ball, with a focus on speed, accuracy, and strategic play."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})
  

let  = document.querySelector("#Robo-war")

roboWar.addEventListener("click", () => {
  eventname.innerHTML = "Robo War"
  eventdescription.innerHTML = "Robo War: Fierce battles unfold as armed robotic warriors clash in intense contests of engineering innovation."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let youth = document.querySelector("#youth")

youth.addEventListener("click", () => {
  eventname.innerHTML = "Youth Got Talent"
  eventdescription.innerHTML = "Youth Got Talent: A creative competition for young talent, where participants showcase their creativity and problem-solving skills."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})
 

let money = document.querySelector("#money")

money.addEventListener("click", () => {
  eventname.innerHTML = "Money Heist"
  eventdescription.innerHTML = "Money Heist: A classic crime drama, with a focus on the power of the law and the power of the money."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let redGreen = document.querySelector("#redGreen")

redGreen.addEventListener("click", () => {
  eventname.innerHTML = "Red Light Green Light"
  eventdescription.innerHTML = "Red Light Green Light: inspired from the k-drama squid game."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let DSLR = document.querySelector("#DSLR")

DSLR.addEventListener("click", () => {
  eventname.innerHTML = "DSLR photography"
  eventdescription.innerHTML = "DSLR Photography: Capturing life's moments with precision and creativity, blending technology and art for stunning visuals."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Reel = document.querySelector("#Reel")

Reel.addEventListener("click", () => {
  eventname.innerHTML = "Reel Making"
  eventdescription.innerHTML = "Reel Making: Crafting visual stories, combining imagination and skill to weave compelling narratives through cinematic artistry."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Phone = document.querySelector("#Phone")

Phone.addEventListener("click", () => {
  eventname.innerHTML = "Phone photography"
  eventdescription.innerHTML = "Phone Photography: Unleashing creativity with a pocket-sized lens, transforming everyday moments into captivating visual stories effortlessly."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

let Roadies = document.querySelector("#Roadies")

Roadies.addEventListener("click", () => {
  eventname.innerHTML = "Roadies"
  eventdescription.innerHTML = "Roadies: Adventurous reality show testing grit and resilience, challenging contestants through thrilling tasks on a road-tripping journey."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
})

/* let redGreen = document.querySelector("#redGreen")

redGreen.addEventListener("click", () => {
  eventname.innerHTML = "Red Light Green Light"
  eventdescription.innerHTML = "Red Light Green Light: inspired from the k-drama squid game."
  prizeMoney.innerHTML = "70000"
  participationFees.innerHTML = "5000"
  eventImage.src = "assests/roboWar.png"
}) */