function Router(settings) {
    if (!settings) return;
    this.settings = settings;
    this.routerLinks = Array.from(document.getElementsByTagName("router-link"));
    this.viewRouter = Array.from(document.getElementsByTagName("view-router")[0].children);
    this.init();
    let { mode } = this.settings;
    if (mode == 'history') {
        this.historyMode();
    } else {
        this.hashMode();
    }
}

Router.prototype.init = function () {
    Array.from(this.viewRouter).forEach(i => {
        i.style.display = "none";
    });
};

Router.prototype.hashMode = function () {
    window.addEventListener("hashchange", event => {
        event.preventDefault;
        this.settings.routers.forEach(element => {
            if ("#" + element.path == location.hash) {
                this.viewRouter.forEach(el => {
                    el.style.display = el.getAttribute("component") == element.component ? "block" : "none";
                });
            }
        });
    });

    this.routerLinks.forEach(i => {
        i.addEventListener("click", () => {
            location.hash = i.getAttribute("to");
        });
    });
};

Router.prototype.historyMode = function () {
    this.routerLinks.forEach(i => {
        i.addEventListener("click", () => {
            let target = i.getAttribute("to");
            history.pushState({ target }, target, target);
            this.settings.routers.forEach(i => {
                if (i.path == target) {
                    this.viewRouter.forEach(el => {
                        el.style.display = el.getAttribute('component') == i.component ? 'block' : 'none';
                    })
                }
            })

        });
    });
};