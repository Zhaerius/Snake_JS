export class Snake {

    constructor(snakeInitial) {
        this.direction = 'ArrowRight'
        this.state = true  
        this.headCurrentCase = snakeInitial
        this.headNextCase = 0
        this.position = [snakeInitial, snakeInitial - 1, snakeInitial - 2]
    }

    CreateElement() {
        this.position.forEach(element => {
            let snake = document.createElement("div")
            let parent = document.querySelector(`[case-id="${element}"]`)
            snake.classList.add('snake')
            parent.appendChild(snake)
        });
    }

    Remove() {
        const snake = document.querySelectorAll('.snake')
        snake.forEach(element => {
            element.remove()
        });
    }


    Move(sizeRow, deathCaseNegative, deathCasePositive, idInterval) {
        //Gestion du mouvement
        switch (this.direction) {
            case "ArrowUp":
                this.headNextCase = parseInt(this.headCurrentCase) - sizeRow
                break;
            case "ArrowDown":
                this.headNextCase = parseInt(this.headCurrentCase) + sizeRow
                break;
            case "ArrowLeft":
                this.headNextCase = parseInt(this.headCurrentCase) - 1
                break;
            case "ArrowRight":
                this.headNextCase = parseInt(this.headCurrentCase) + 1
                break;
            default:
                break;
        }

        //Mise à jour des positions
        for (let i = this.position.length - 1; i >= 0; i--) {
            if (i == 0)
                this.position[i] = this.headNextCase
            else
                this.position[i] = this.position[i - 1]
        }


        //Vérification et mouvement
        let canMove = this.CheckMove(sizeRow, deathCaseNegative, deathCasePositive)

        if(canMove) {
            this.Remove()
            this.CreateElement()
            this.headCurrentCase = this.headNextCase
        }
        else {
            this.state = false
            alert('Perdu !')
            clearInterval(idInterval)
        }

    }

    
    CheckMove(sizeRow, deathCaseNegative, deathCasePositive) {
        if (this.headNextCase > sizeRow * sizeRow || this.headNextCase < 1)
            return false

        if (deathCaseNegative.includes(parseInt(this.headCurrentCase)) && this.headNextCase == (this.headCurrentCase + 1))
            return false

        if (deathCasePositive.includes(parseInt(this.headCurrentCase)) && this.headNextCase == (this.headCurrentCase - 1))
            return false

        return true
    }


}