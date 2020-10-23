const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const auth = require('./auth');
const bodyParser = require('body-parser');

const feeds = require('./feeds');
const e = require('express');

let bypassAuth = false;

if (process.argv[2] === 'no-auth') {
    bypassAuth = true;
    console.log('Bypassing authentication.');
}



app.use(cors());
app.use(bodyParser());

const check = auth(bypassAuth);

app.post('/login', (req, res) => {
    if (req.body.username === 'user' && req.body.password === 'password') {
      res.json({token: 'adsf92bnmzxc.ikasdgabv9ea'});
    } else {
        res.json({error: 'Invalid username or password'});
    }
});

app.get('/feeds', check, (req, res) => {
    res.json(feeds.feeds);
});

app.post('/feeds', check, (req, res) => {
    let data = req.body;

    let feed = feeds.add(data.url);

    res.json(feed);
});

app.delete('/feeds/:feedId', check, (req, res) => {
    feeds.remove(parseInt(req.params.feedId, 10));

    res.json({});
});

app.get('/feeds/:feedId', check, (req, res) => {
    let feed = feeds.feeds.find(f => f.id === parseInt(req.params.feedId));

    if (feed) {
        res.json(feed);
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

app.get('/items/:itemId', check, (req, res) => {
    let item = findItemById(req.params.itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({
            error: 'not found'
        });
    }
});

function findItemById(id) {
    id = parseInt(id);
    for (let ii = 0; ii < feeds.feeds.length; ii++) {
        let feed = feeds.feeds[ii];

        for (let jj = 0; jj < feed.items.length; jj++) {
            let item = feed.items[jj];
            if (item.id === id) {
                return item;
            }
        }
    }

    return null;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  