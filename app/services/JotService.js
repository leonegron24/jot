import { AppState } from "../AppState.js"
import { Jot } from "../models/jot.js"
import { loadState, saveState } from "../utils/Store.js"

class JotService {
    
    setActiveJot(jotID) {
        console.log('service activating jot')
        const jots = AppState.jots
        const activateJot = jots.find(jot => jot.id === jotID)
        if (!activateJot){return}
        AppState.activeJot = activateJot
        console.log('jot activated')
    }
    
    
    saveActiveJot(newBody){
        const activeJot = AppState.activeJot
        activeJot.body = newBody
        activeJot.updatedAt = new Date()
        console.log(activeJot.updatedAt)
        this.saveJot()
        AppState.emit('activeJot')
        
    }
    
    saveJot(){
        console.log('saving jot list')
        const jots = AppState.jots
        saveState('jots', jots)
    }
    
    
    loadJot(){
        const jots = loadState('jots', [Jot])
        console.log('loading jots', jots)
        AppState.jots = jots
    }
    
    deleteJot() {
        const activeJot = AppState.activeJot
        const indexToRemove = AppState.jots.indexOf(activeJot)
        AppState.activeJot = null
        AppState.jots.splice(indexToRemove,1)
        this.saveJot()
    }

    addJot(formData){
        const newJot = new Jot(formData)
        newJot.createdAt = new Date()
        console.log('service adding jot', newJot)
        AppState.jots.push(newJot)
        console.log("jotCount", AppState.jots.length)
        this.saveJot()
    }
    
}

export const jotService = new JotService()