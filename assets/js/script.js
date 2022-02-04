let numberOfHeads = 0
let numberOfTails = 0
let headsPercentage = 0
let tailsPercentage = 0
let totalFlips = 0

//let images = ['./assets/images/penny-heads.jpg', './assets/images/penny-tails.jpg']
let images = [
    {
        imagePath: './assets/images/penny-heads.jpg',
        side: 'heads',
        message: 'You flipped Heads!'
    },
    {
        imagePath: './assets/images/penny-tails.jpg',
        side: 'tails' ,
        message: 'You flipped Tails!'
    }     
    ]

document.addEventListener('DOMContentLoaded', function () {
         document.getElementById('flip').addEventListener('click', function() {
             let randomImage = images[Math.floor(Math.random() * images.length)]
             document.getElementById('penny-img').setAttribute('src', randomImage.imagePath)
                if (randomImage.side === 'heads' ) {
                    numberOfHeads++
                    document.querySelector('.message-container').textContent = randomImage.message
                    document.querySelector('#heads').textContent = numberOfHeads
                }
                else {
                    numberOfTails++
                    document.querySelector('.message-container').textContent = randomImage.message
                    document.querySelector('#tails').textContent = numberOfTails
                }

                totalFlips++

                headsPercentage = Math.round((numberOfHeads / totalFlips * 100))
                tailsPercentage = Math.round((numberOfTails / totalFlips * 100))
                document.getElementById('heads-percent').textContent = headsPercentage + '%'
                document.getElementById('tails-percent').textContent = tailsPercentage + '%'
         }) 
})