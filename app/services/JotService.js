import { AppState } from "../AppState.js"

class JotService {

    setActiveJot(jotTitle) {
        console.log('service activating jot')
        const jots = AppState.jots
        const activateJot = jots.find(jot => jot.title === jotTitle)
        if (!activateJot){return}
        AppState.activeJot = activateJot
        console.log('jot activated')
    }

}

export const jotService = new JotService()