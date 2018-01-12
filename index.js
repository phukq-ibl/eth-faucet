var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var common = require('./common');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Public resources
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/get-eth', function (req, res) {
    var url = req.body['social-link'];
    if (!common.checkUrl(url)) {
        return res.json({ rs: 'fail' })
    }

    var receiAddress = '';
    if (url.indexOf('gist.github.com') >= 0) {
        getGistAddress(url);
    }

    res.json({ rs: 'ok' });
})


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})


// https://gist.github.com/phukq/9fc9258ede44c64a8bb59f29e4ce3158
// https://www.facebook.com/jensie.piquero/posts/1383941925066474