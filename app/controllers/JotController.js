import { AppState } from "../AppState.js"
import { jotService } from "../services/JotService.js"

export class JotController {
    constructor() {
      console.log('This is the Home Controller')
      this.drawJots()
      AppState.on('activeJot', this.drawActiveJot)
    }

    drawJots() {
        console.log('drawing jot list')
        const elmJotList = document.getElementById('jots')
        const jots = AppState.jots
        if (!elmJotList){return}
        jots.forEach(jot => elmJotList.innerHTML += jot.JotListTemplate)
    }

    setActiveJot(jotTitle){
        console.log('setting active jot')
        console.log(AppState.activeJot)
        jotService.setActiveJot(jotTitle)
    }

    drawActiveJot(selectedJot){
        console.log('drawing active jot')
        const elmActiveJot = document.getElementById('active-jot')
        if (!elmActiveJot){return}
        elmActiveJot.innerHTML = AppState.activeJot.ActiveJotTemplate
    }

  }