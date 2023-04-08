import { Game } from "./Models/Game.js"

let game = new Game(500, 20, 485)
game.CreateSpaceGame()
game.GenerateDeathCaseNegative()
game.GenerateDeathCasePositive()

game.snake.CreateElement()

let idInterval = 0

document.addEventListener('keyup', (event) => {

    if (!game.state && game.authorizeKey.includes(event.key)) {
        game.state = true


        idInterval = setInterval(() => {
            game.Play(idInterval)
        }, 70)
    }

    if (game.authorizeKey.includes(event.key)) {
        //Pas de retour arrière possible  
        if (game.snake.direction == "ArrowRight" && event.key != "ArrowRight" && event.key != "ArrowLeft")
            game.snake.direction = event.key

        if (game.snake.direction == "ArrowLeft" && event.key != "ArrowLeft" && event.key != "ArrowRight")
            game.snake.direction = event.key

        if (game.snake.direction == "ArrowUp" && event.key != "ArrowUp" && event.key != "ArrowDown")
            game.snake.direction = event.key

        if (game.snake.direction == "ArrowDown" && event.key != "ArrowDown" && event.key != "ArrowUp")
            game.snake.direction = event.key
    }

})

