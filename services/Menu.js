import API from "./API.js";

export async function loadData() {
    app.store.menu = await API.fetchMenu()
}

export async function getProductById(id) {
    if(app.store.menu==null) {
        await loadData();
    }

    for (let c of app.store.menu) {
        for (let product of c.products) {
            if(product.id == id) {
                return product;
            }
        }
    }
}

