export class Snake {

    constructor() {
        this.currentCase = 0
        this.nextCase = 0
        this.direction = 'ArrowRight'
        this.state = true
    }

    Create(id) {
        let snake = document.createElement("div")
        let parent = document.querySelector(`[case-id="${id}"]`)
        snake.classList.add('snake')
        parent.appendChild(snake)
        this.currentCase = id
    }

    Remove() {
        const snake = document.querySelector('.snake')
        snake.remove()
    }

    Move(sizeRow, deathCaseNegative, deathCasePositive, idInterval) {
        this.Remove()
    
        //Gestion du mouvement
        switch (this.direction) {
            case "ArrowUp":
                this.nextCase = parseInt(this.currentCase) - sizeRow
                break;
            case "ArrowDown":
                this.nextCase = parseInt(this.currentCase) + sizeRow
                break;
            case "ArrowLeft":
                this.nextCase = parseInt(this.currentCase) - 1
                break;
            case "ArrowRight":
                this.nextCase = parseInt(this.currentCase) + 1
                break;
            default:
                break;
        }

        let canMove = this.CheckMove(sizeRow, deathCaseNegative, deathCasePositive)

        if(canMove) {
            this.Create(this.nextCase)
        }
        else {
            this.state = false
            alert('Perdu !')
            clearInterval(idInterval)
        }
    }

    CheckMove(sizeRow, deathCaseNegative, deathCasePositive) {
        if(this.nextCase > sizeRow * sizeRow || this.nextCase < 1)
            return false

        if (deathCaseNegative.includes(parseInt(this.currentCase)) && this.nextCase == (this.currentCase + 1))
            return false

        if (deathCasePositive.includes(parseInt(this.currentCase)) && this.nextCase == (this.currentCase - 1))
            return false

        return true
    }
}