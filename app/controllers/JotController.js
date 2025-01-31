import { AppState } from "../AppState.js"
import { jotService } from "../services/JotService.js"
import { getFormData } from "../utils/FormHandler.js"

export class JotController {
    constructor() {
      console.log('This is the Home Controller')
      this.drawJots()
      AppState.on('activeJot', this.drawActiveJot)
      AppState.on('jots', this.drawJots)
      jotService.loadJot()
      
    }

    drawJots() {
        console.log('drawing jot list')
        const elmJotList = document.getElementById('jots')
        const jots = AppState.jots
        let jotList = ''
        if (!elmJotList){return}
        jots.forEach(jot => jotList += jot.JotListTemplate)
        elmJotList.innerHTML = jotList
        const elmCountJots = document.getElementById('count-jots')
        elmCountJots.innerHTML = jots.length.toString() + ' Jots'
    }

    setActiveJot(jotID){
        console.log('setting active jot')
        console.log(AppState.activeJot)
        jotService.setActiveJot(jotID)
    }

    drawActiveJot(selectedJot){
        const activeCase = AppState.activeJot
        const elmActiveJot = document.getElementById('active-jot')
        if (activeCase){
            console.log('drawing active jot')
            if (!elmActiveJot){return}
            elmActiveJot.innerHTML = activeCase.ActiveJotTemplate
        }else {
            if (!elmActiveJot){return}
            elmActiveJot.innerHTML = '<h2> Please select a jot</h2>'
        }
    }

    saveActiveJot(){
        if (!event){return}
        event.preventDefault()
        console.log('controller save jot')
        const form = event.target
        const newBody = form.body.value
        jotService.saveActiveJot(newBody)
    }

    deleteJot(){
        console.log('deleting jot')
        const confirmed = confirm("Are you sure you want to delete this?")
        if (confirmed == false){return}
        jotService.deleteJot()
    }
    
    addJot(){
        console.log('adding jot')
        if (!event){return}
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        jotService.addJot(formData)
    }
  }