const defaulty = require('../src/defaulty');
const be = require('bejs');

describe('defaulty', function () {

    describe('defaults', function () {
        it('should be return true', () => {
            let result = defaulty({a: 4, b: 5}, {a: 1, b: 2, c: 3});
            console.log(result);
            be.err.equal(result, {a: 4, b: 5, c: 3});
        });
        it('should be return false', () => {
            let result = defaulty({a: 4, b: 5}, {a: 1, b: 2, c: 3});
            console.log(result);
            be.err.not.equal(result, {a: 4, b: 5});
        });
    });

    describe('defaults, deep', function () {
        it('should be return true', () => {
            let result = defaulty({a: 4, b: 5, d: {a: 1}}, {a: 1, b: 2, c: 3, d: {a: 5, b: 2}});
            console.log(result);
            be.err.equal(result, {a: 4, b: 5, c: 3, d: {a: 1, b: 2}});
        });
    });

});