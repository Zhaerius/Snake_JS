import { Helpers } from "../Helpers/Helpers.js"

export class Candy {
    constructor() {
        this.currentPosition = 0
    }

    Create(numberCase) {
        //Creation du HTML
        let rdn = Helpers.generateRandomNumber(numberCase)
        let candy = document.createElement("div")
        let parent = document.querySelector(`[case-id="${rdn}"]`)
        candy.classList.add('candy')
        parent.appendChild(candy)

        //Mise à jour de la position
        this.currentPosition = rdn
    }

    Remove() {
        const candy = document.querySelector('.candy')
        candy.remove()
    }
}
