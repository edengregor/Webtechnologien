const fs = require("fs");

fs.writeFile("test.txt", "Hallo WEB1", function(err) {
    fs.readFile("test.txt", "utf8", function(err, data) {
        console.log("Gelesener Inhalt:", data);
    });
});

console.log("Datei schreiben und lesen:");
