import { Jot } from './models/jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


jots = [
  new Jot({
    title: 'example jot here',
    color: 'red',
    body: "I like typing notes because typing notes help me remember things",
    createdAt: new Date(),
    updatedAt: new Date() }),
    
  new Jot({
    title: ' another example',
    color: 'blue',
    body: "Im gonna keep typing until my fingers bleeeeeed!",
    createdAt: new Date(),
    updatedAt: new Date()
  })
]
/**@type {Jot} */
activeJot = null

}

export const AppState = createObservableProxy(new ObservableAppState())