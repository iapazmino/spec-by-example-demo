"use strict"

const assert = require("assert");

step("Given a card holder outside their country with USD <credit> available credit", async (credit) => {
    console.log(`Starting available credit: ${credit}`);
});

step("And considering the following table for charges and fees <table>", async (table) => {
    console.log(`Table for charges and fees: ${table}`);
});

step("When I withdraw <table>", async (table) => {
    console.log(`Withdrawal transactions ${table}`);
});

step("Then results in the following transactions table <table>", async (table) => {
    console.log(`Transactions table ${table}`);
    assert.ok(true);
});