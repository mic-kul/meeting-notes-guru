// const Alexa = require('alexa-sdk');

// exports.handler = function(event, context, callback) {
//     const alexa = Alexa.handler(event, context, callback);
//     alexa.appId = APP_ID // APP_ID is your skill id which can be found in the Amazon developer console where you create the skill.
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };

// const handlers = {
//     'HelloWorldIntent' : function() {
//         //build response first using responseBuilder and then emit
//         this.response.speak('Hello World!');
//         this.emit(':responseReady');
//     }
// };

var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});
