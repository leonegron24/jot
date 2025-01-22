import { generateId } from "../utils/GenerateId.js"

export class Jot {

       /**
     * 
     * @param {{
       * title: string,
       * color: *,
       * body: string,
       * createdAt: Date | String,
       * updatedAt: Date | String,
       * }} data 
       */

    constructor(data){
        this.id = generateId()
        this.title = data.title
        this.color = data.color
        this.body = data.body
        this.createdAt = null
        this.updatedAt = null
    }

    getJotTemplate(){
        return /*html*/ `
        <div>
            <div class =
                ${this.title} ${this.body}
            </div>
        </div> 
        `
    }

}