import API from './services/API.js'
import Store from './services/Store.js'
import { loadData } from './services/Menu.js'
import Router from './services/Router.js'


window.app = {}
app.store = Store;
app.router = Router;



// It's better t o wait for the event for manipulation off the doc

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
    
})

