const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((link) => {
            link.addEventListener("click", event => {
                event.preventDefault();
                console.log("Link Clicked")
                // const url = event.target.href; 
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        })
        // check the initial URL 
        Router.go(location.pathname);

        //Event Handler for URL Changes
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        })
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`)
        if (addToHistory) {
            history.pushState({route}, "", route);
        }
        let pageElement = null;
        switch(route) {
            case "/":
                
                pageElement = document.createElement("menu-page");
                
                pageElement.textContent = "Menu"
                break;
            case "/order":
                
                pageElement = document.createElement("order-page");
                pageElement.textContent = "Order"
                break;
            default: 
                if(route.startsWith("/product-")) {
                    pageElement = document.createElement("details-page");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-")+1);
                    pageElement.dataset.id = paramId;
                }
                break;
        }
        if(pageElement) {
            const cache  = document.querySelector("main")
            // cache.children[0].remove()
            cache.innerHTML = ""
            cache.appendChild(
                pageElement
                )
            window.scrollX = 0;
            window.scrollY = 0

        }
    } 
}

export default Router;