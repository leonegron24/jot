import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { JotController } from './controllers/JotController.js';
const USE_ROUTER = false

class App {

  JotController = new JotController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
