const createPage = require("./Afg3_template");

function router(req, res){
    let content = "";
    let statusCode = 200;

    if(req.method === "GET" && req.url === "/feedback"){
        content = "Liste der Feedbacks";
    } else{
        content = "Methode: ${req.method}, URL: ${req.url}";
    }

    const page = createPage(content);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(page);
}

module.exports = router;