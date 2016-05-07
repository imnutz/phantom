"use strict";

var koa = require("koa");
var route = require("koa-route");
var cors = require("koa-cors");

var tiles = require("./tiles");

var app = koa();

app.use(cors());
app.use(route.get("/tiles", getTiles));

function *getTiles() {
    this.body = tiles;
    this.status = 200;
};

app.listen(3000);
console.log("Listening at 3000.");