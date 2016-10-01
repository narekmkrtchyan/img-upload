'use strict';
const express       = require('express');
const favicon       = require('serve-favicon');
const app           = express();
var server          = require("./server.js");
var router          = require("./router.js");
var requestHandlers = require("./requestHandlers");
app.use(favicon(__dirname + '/favicon.ico'));
var handle = {};
handle["/"]       = requestHandlers.start;
handle["/start"]  = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"]   = requestHandlers.show;

server.start(router.route,handle);
