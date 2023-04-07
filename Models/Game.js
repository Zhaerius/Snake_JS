import { Snake } from "./Snake.js"
import { Candy } from "./Candy.js"

export class Game {
    constructor(sizeArea, sizeCase, snakeInitial) {
        this.sizeArea = sizeArea
        this.sizeCase = sizeCase
        this.sizeRow = (sizeArea / sizeCase)
        this.numberCase = this.sizeRow * this.sizeRow
        this.divArea = document.querySelector('#game')
        this.deathCaseNegative = []
        this.deathCasePositive = []
        this.snake = new Snake(snakeInitial)
        this.state = false
        this.candy = new Candy()
        this.point = 0
    }

    CreateSpaceGame() {    
        for (let index = 1; index < this.numberCase + 1; index++) {
            let div = document.createElement("div")
            div.classList.add('case')
            div.setAttribute('case-id', index)
            this.divArea.appendChild(div)
        }
        this.candy.Create(this.numberCase)
        this.DisplayPoint()
    }

    GenerateDeathCaseNegative() {    
        for (let index = this.sizeRow; index <= this.numberCase; index += this.sizeRow) {
            this.deathCaseNegative.push(index)
        } 
        return this.deathCaseNegative
    }

    GenerateDeathCasePositive() {    
        for (let index = 0; index < this.numberCase; index += this.sizeRow) {
            this.deathCasePositive.push(index + 1)
        } 
        return this.deathCasePositive 
    }

    Play(idInterval) {
        this.snake.UpdatePosition(this.sizeRow)
        let canMove = this.snake.CheckMove(this.sizeRow, this.deathCaseNegative, this.deathCasePositive)
        
        if(canMove && this.snake.headNextCase == this.candy.currentPosition) {
            this.candy.Remove()
            this.candy.Create(this.numberCase)
            this.point++

            this.snake.AddPartBody()

            this.DisplayPoint()
        }

        this.snake.Move(canMove, idInterval)
    }

    DisplayPoint() {
        let point = document.querySelector(".point")
        point.innerText = this.point
    }



}