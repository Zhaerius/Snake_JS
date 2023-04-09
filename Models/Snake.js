export class Snake {

    constructor(snakeInitial) {
        this.direction = 'ArrowRight'
        this.state = true  
        this.headCurrentCase = snakeInitial
        this.headNextCase = 0
        this.position = [snakeInitial, snakeInitial - 1, snakeInitial - 2]
    }

    CreateElement() {
        this.position.forEach((element, index) => {
            let snake = document.createElement("div")
            let parent = document.querySelector(`[case-id="${element}"]`)
            snake.classList.add('snake')

            if(index == 0)
                snake.classList.add('head')

            parent.appendChild(snake)
        });
    }

    Remove() {
        const snake = document.querySelectorAll('.snake')
        snake.forEach(element => {
            element.remove()
        });
    }

    AddPartBody() {
        let lastElement = parseInt(this.position[this.position.length - 1])
        this.position.push(lastElement)
    }

    //TODO : lisibilité pas ouf
    UpdatePosition(sizeRow, delta, downCases, upCases, leftCases, rightCases) {
        //Gestion du mouvement
        switch (this.direction) {
            case "ArrowUp":
                this.headNextCase = parseInt(this.headCurrentCase) - sizeRow

                if(upCases.includes(this.headCurrentCase))
                    this.headNextCase = parseInt(this.headCurrentCase) + delta

                break;
            case "ArrowDown":
                this.headNextCase = parseInt(this.headCurrentCase) + sizeRow

                if(downCases.includes(this.headCurrentCase))
                    this.headNextCase = parseInt(this.headCurrentCase) - delta

                break;
            case "ArrowLeft":
                this.headNextCase = parseInt(this.headCurrentCase) - 1

                if(leftCases.includes(this.headCurrentCase))
                    this.headNextCase = parseInt(this.headCurrentCase) + (sizeRow - 1)

                break;
            case "ArrowRight":
                this.headNextCase = parseInt(this.headCurrentCase) + 1

                if(rightCases.includes(this.headCurrentCase))
                    this.headNextCase = parseInt(this.headCurrentCase) - (sizeRow - 1)

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
    }

    Move() {
        this.Remove()
        this.CreateElement()
        this.headCurrentCase = this.headNextCase
    }

}