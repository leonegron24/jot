import { AppState } from "../AppState.js"
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
        this.id = data.id || generateId()
        this.title = data.title
        this.color = data.color
        this.body = data.body
        this.createdAt = data.createdAt ? new Date(data.createdAt): ''
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
    }

    get JotListTemplate(){
        return /*html*/ `
        <div class='p-2'>
            <div type='button' onclick="app.JotController.setActiveJot('${this.title}')" style="border: 10px solid ${this.color}">
                <div class="p-2 d-flex align-items-center justify-content-between">
                    <p class="fw-bold">${this.title}</p> <p class=" w-25 text-end text-secondary" style = 'font-size: 10px'>${this.createdAtFormat}</p>
                </div>
            </div>
        </div>    
        `
    }

    get ActiveJotTemplate() {
        return /*html*/ `
        <div class="bg-secondary p-4 rounded">
            <h3 class='d-flex justify-content-between'>${this.title} <i class="mdi mdi-note" style = "color: ${this.color}"></i></h3>
            <p>Created on: ${this.createdAtFormat}</p>
            <div class="d-flex justify-content-between">
                <p>Last update: ${this.updatedAtFormat}</p>
            </div>
            <form class="row mt-4" onsubmit="app.JotController.saveActiveJot()">
                <textarea placeholder="Write Notes Here!" name="body" id="jot-body" class = "bg-white">${this.body}
                </textarea>
                <div class='text-end p-2'>
                    <button type="button" class="rounded btn btn-danger" onclick="app.JotController.deleteJot()"><i class="mdi mdi-delete"></i> Delete</button>
                    <button class="rounded btn btn-success" ><i class="mdi mdi-download"></i> Save</button>
                </div>
            </form>
      </div>
        `
    }

    get createdAtFormat(){
        return this.createdAt ? this.createdAt.toLocaleDateString('en-US',{
            weekday: 'long',
            day: '2-digit',
            month: 'short',
            year:'numeric'
        }) 
        : ''
    }

    get updatedAtFormat(){
        return this.updatedAt ? this.updatedAt.toLocaleTimeString('en-US',{
            weekday: 'long',
            day: '2-digit',
            month: 'short',
            year:'numeric'
        }) 
        : ''
    }
}