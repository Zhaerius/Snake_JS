import { Game } from "./Models/Game.js"

let game = new Game(500, 20)
game.CreateSpaceGame()
game.GenerateDeathCaseNegative()
game.GenerateDeathCasePositive()

let snake = game.snake
snake.Create(477)

let idInterval = 0

document.addEventListener('keyup', (event) => {
    if(!game.state) {
        game.state = true
        idInterval = setInterval(() => {
            snake.Move(game.sizeRow, game.deathCaseNegative, game.deathCasePositive, idInterval)
        }, 70)
    }

    snake.direction = event.key
})