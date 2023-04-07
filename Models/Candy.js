import { Helpers } from "../Helpers/Helpers.js"

export class Candy {
    constructor() {
        this.currentPosition = 0
    }

    Create(caseCreate) {
        //Creation du HTML
        let candy = document.createElement("div")
        let parent = document.querySelector(`[case-id="${caseCreate}"]`)
        candy.classList.add('candy')
        parent.appendChild(candy)

        //Mise à jour de la position
        this.currentPosition = caseCreate
    }

    Remove() {
        const candy = document.querySelector('.candy')
        candy.remove()
    }
}
