const { describe } = require("mocha");
const chai = require("chai");
const axisOfChoice = require("./axisOfCoice");

const data = [
    { coordinates: [30, 40, 10, 20], expected: 'Y'},
    { coordinates: [-5, 20, -4, -20], expected: 'X'},
    { coordinates: [1, 1, 1, 1], expected: 'XY'},
];

const assert = chai.assert;

describe("Axis of choice", function() {
    describe("Прямоугольник задан координатами", function() {
        data.map( function(d) {
            it('a = (' + d.coordinates[0] + ', ' + d.coordinates[1] + ') b = (' + d.coordinates[2] + ', ' + d.coordinates[3] + ')', function() {
                assert.equal(axisOfChoice(d.coordinates), d.expected);
            });
        });
    });
});
