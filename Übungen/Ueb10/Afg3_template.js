function createPage(content) {
    return `
        <!DOCTYPE html>
        <html lan="de">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>${content}</h1>
        </body>
        <html>
        `;
}

module.exports = createPage;