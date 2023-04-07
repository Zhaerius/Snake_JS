import { Game } from "./Models/Game.js"

let game = new Game(500, 20, 485)
game.CreateSpaceGame()
game.GenerateDeathCaseNegative()
game.GenerateDeathCasePositive()

game.snake.CreateElement()

let idInterval = 0

document.addEventListener('keyup', (event) => {
    if(!game.state) {
        game.state = true
        idInterval = setInterval(() => {
            game.Play(idInterval)
        }, 70)
    }
    game.snake.direction = event.key
})

