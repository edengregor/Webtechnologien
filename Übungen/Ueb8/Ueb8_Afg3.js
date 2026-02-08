let firefox = {
    browserEngine: "Gecko",
    name: "Firefox"
};

let tool = {
    browserEngine: "Blink",
    category: "Browser"
};

let chrome = {
    name: "Chrome",
};

Object.setPrototypeOf(chrome, tool);
Object.setPrototypeOf(tool, firefox);