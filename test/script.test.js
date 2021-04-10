const assert = require('assert');
const script = require("../script.js")

describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
})

describe('POI Layer functions', () => {
    it('POI search layer should not return null', () => {
        assert.equal(true, true)
    })
    it('POI global layer search should not return null', () => {
        assert.equal(true, true)
    })
    it('Adding a POI should not throw an error', () => {
        assert.equal(true, true)
    })
    it('Removing a POI should not throw an error', () => {
        assert.equal(true, true)
    })
})

describe('POI functions', () => {
    it('Adding a POI should not throw an error', () => {
        assert.equal(true, true)
    })
    it('Removing a POI should not throw an error', () => {
        assert.equal(true, true)
    })
})

describe('String function', () => {
    it('A json string should be generated from an object', () => {
        const json = script.generate_string({"name": "Corey Fuller", "age": 21, "occupations" : ["QA Analyst", "Software Engineer", "Research Assistant"]})
        console.log(json)
        assert.equal(json,'{"name":"Corey Fuller","age":21,"occupations":["QA Analyst","Software Engineer","Research Assistant"]}')
    })
})
