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
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }

    get JotListTemplate(){
        return /*html*/ `
        <div class='p-2'>
            <div type='button' onclick="app.JotController.setActiveJot('${this.title}')" style="border: 10px solid ${this.color}">
                <div class="p-2 d-flex justify-content-between">
                    <p>${this.title}</p> <p class="text-end">${this.createdAt}</p>
                </div>
            </div>
        </div>    
        `
    }

    get ActiveJotTemplate() {
        return /*html*/ `
        <div class="bg-secondary p-4 rounded">
            <h3>${this.title}</h3>
            <p>${this.createdAt}</p>
            <div class="d-flex justify-content-between">
                <p>${this.updatedAt}</p>
                <div>
                    <button class="rounded btn btn-danger" onclick="app.JotController.deleteJot('${this.title}')"><i class="mdi mdi-delete"></i> Delete</button>

                    <button class="rounded btn btn-success" onclick="app.JotController.saveJot('${this.title}')"><i class="mdi mdi-download"></i> Save</button>

                </div>
            </div>
            <div class="row mt-4">
                <textarea placeholder="Write Notes Here!">${this.body}</textarea>
            </div>
      </div>
        `
    }

}