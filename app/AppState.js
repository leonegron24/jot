import { Jot } from './models/jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


jots = [
  new Jot({
    title: 'example jot here',
    color: 'red',
    body: "I like typing notes because typing notes help me remember things",
    createdAt: "08/24/2025",
    updatedAt: "10:24 AM, Wed, 08/24/2025" }),
    
  new Jot({
    title: ' another example',
    color: 'blue',
    body: "Im gonna keep typing until my fingers bleeeeeed!",
    createdAt: "10/12/2023",
    updatedAt: "9:00 PM, Tue, 11/24/2023"
  })
]
/**@type {Jot} */
activeJot = null

}

export const AppState = createObservableProxy(new ObservableAppState())