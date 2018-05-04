const express = require('express');
const router = express.Router();
const Feed = require('rss-to-json');
const request = require('request');

/* GET home page */
router.get('/publications', function (req, res, next) {
    request('https://medium.com/@mathis.garberg/latest?format=json', function (error, response, body) {
        let strippedResponse = stripMediumResponse(body);
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(strippedResponse)
            res.send(info);
        }
    });
});

function stripMediumResponse (body) {
    return body.substring(16);
}

module.exports = router;