function Engine(name, maintainer) {
    this.name = name;
    this.maintainer = maintainer;
}

function Browser(browserEngine, jsEngine) {
    this.browserEngine = browserEngine;
    this.jsEngine = jsEngine;
}

let blinkEngine = new Engine("Blink", "Chromium");
let jsEngine = new Engine("V8", "Chromium");

let chrome = new Browser(blinkEngine, jsEngine);