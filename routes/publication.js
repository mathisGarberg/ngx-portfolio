var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Publication = require('../models/Publication.js');
var Feed = require('rss-to-json');
var request = require('request');

/* GET home page */
router.get('/', function (req, res, next) {
    request('https://medium.com/@mathis.garberg/latest?format=json', function (error, response, body) {
        var strippedResponse = stripMediumResponse(body);
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(strippedResponse)
            res.send(info);
        }
    });
});

function stripMediumResponse (body) {
    return body.substring(16);
}

module.exports = router;