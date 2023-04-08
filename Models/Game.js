import { Snake } from "./Snake.js"
import { Candy } from "./Candy.js"
import { Helpers } from "../Helpers/Helpers.js"

export class Game {
    constructor(sizeArea, sizeCase, snakeInitial) {
        this.sizeArea = sizeArea
        this.sizeCase = sizeCase
        this.sizeRow = (sizeArea / sizeCase)
        this.numberCase = this.sizeRow * this.sizeRow
        this.divArea = document.querySelector('#game')
        this.upCases = []
        this.downCases = []
        this.snake = new Snake(snakeInitial)
        this.state = false
        this.candy = new Candy()
        this.point = 0
        this.authorizeKey = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"]
        this.defineDirection = false
    }

    CreateSpaceGame() {    
        for (let index = 1; index < this.numberCase + 1; index++) {
            let div = document.createElement("div")
            div.classList.add('case')
            div.setAttribute('case-id', index)
            this.divArea.appendChild(div)
        }
        this.candy.Create(Helpers.generateRandomNumber(this.numberCase))
        this.DisplayScore()
        this.GenerateUpCases()
        this.GenerateDownCases()
    }

    GenerateUpCases() {    
        for (let i = 1; i <= this.sizeRow; i++) {
            this.upCases.push(i)
        } 
        return this.upCases 
    }

    GenerateDownCases() {    
        for (let i = (this.numberCase - this.sizeRow); i <= this.numberCase; i++) {
            this.downCases.push(i)
        } 
        return this.downCases 
    }

    Defeat(idInterval, message) {
        this.snake.state = false
        alert(message)
        clearInterval(idInterval)
    }

    DisplayScore() {
        let point = document.querySelector(".point")
        point.innerText = this.point
    }


    Play(idInterval) {
        // MAJ des coordonées
        this.snake.UpdatePosition(this.sizeRow, (this.numberCase - this.sizeRow), this.downCases, this.upCases)
        
        // Si la case contient un bonbon
        if(this.snake.headNextCase == this.candy.currentPosition) {
            let rdn = Helpers.generateRandomNumber(this.numberCase)

            while(this.snake.position.includes(rdn)) {
                rdn = Helpers.generateRandomNumber(this.numberCase)
            }

            this.candy.Remove()
            this.candy.Create(rdn)
            this.point++
            this.snake.AddPartBody()
            this.DisplayScore()
        }

        // Le snake se déplace
        this.snake.Move()

        // Vérification serpent qui se mort la queue
        let snakeBody = [...this.snake.position]
        if(snakeBody.slice(2).includes(this.snake.headNextCase))
            this.Defeat(idInterval, "Mordu ! Mordu mordu mordu !")

        // Pour authoriser la définition d'une nouvelle direction
        this.defineDirection = false
    }
}