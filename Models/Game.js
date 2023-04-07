import { Snake } from "./Snake.js"

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
    }

    CreateSpaceGame() {    
        for (let index = 1; index < this.numberCase + 1; index++) {
            let div = document.createElement("div")
            div.classList.add('case')
            div.setAttribute('case-id', index)
            this.divArea.appendChild(div)
        }
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
}