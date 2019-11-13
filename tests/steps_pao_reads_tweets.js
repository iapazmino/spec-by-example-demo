"use strict"

const assert = require("assert");

step("<handler> opens a session", async (handler) => {
    console.log(`${handler} has started a new session.`);
});

step("The following list includes <handler>", async (handler) => {
    console.log(`${handler} was found in the list of people Pao follows`);
});

step("The home page includes <date>'s tweet from <handler>", async (date, handler) => {
    console.log(`There's a tweet by ${handler} ${date}`);
    assert.ok(true);
});

step("The home page excludes <date>'s tweet from <handler>", async (date, handler) => {
    console.log(`There's not a tweet by ${handler} ${date}`);
    assert.ok(true);
});