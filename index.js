const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 520;


c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image()
image.src = 'assests/background.png'

const playerImage = new Image();
playerImage.src = 'assests/spaceShip2.png';

class Sprite {
    constructor({ position, image, height, width }) {
        this.position = position
        this.image = image
        this.width = width
        this.height = height
    }


    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: image,
    width: image.width,
    height: image.height
})


let width, height;

const keys = {
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}
function animate() {
    requestAnimationFrame(animate);
    background.draw()
    
   
    width = playerImage.width * 0.50; // Change 0.5 to your desired scale factor
    height = playerImage.height * 0.60;
    c.drawImage(playerImage, 150, 150, width, height);


    if(keys.ArrowRight.pressed) background.position.x = background.position.x - 5
    else if(keys.ArrowLeft.pressed) background.position.x = background.position.x + 5
    
    
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break
    }

})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
    }

})