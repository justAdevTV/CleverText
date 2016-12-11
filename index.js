var express = require('express');
var bodyParser = require('body-parser');

var cleverbot = require("cleverbot.io"),
bot = new cleverbot("CQr857BJmzen8Nrw", "3psJeIWm9nLZaupKUAfvTb886EFln5sb");

bot.setNick("sessionname");

bot.create(function (err, session) {

  // Woo, you initialized cleverbot.io.  Insert further code here
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/message', function(req, res){
	console.log(req.body);

	var msgBody = req.body.Body;
	var cleverResponse = "";

	bot.ask(msgBody, function (err, response) {
	cleverResponse = response;

		res.send(`
			<Response>
				<Message>
					${cleverResponse}
				</Message>
			</Response>
		`);
	});
})

app.listen(3000);