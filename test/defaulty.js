const defaulty = require('../index');
const be = require('bejs');

describe('defaulty', function () {

    describe('defaults', function () {
        it('should be return true', () => {
            let targetObj = {a: 4, b: 5};
            const defaultObj = {a: 1, b: 2, c: 3};
            let result = defaulty(targetObj, defaultObj);
            console.log(targetObj);
            console.log(result);
            be.err.equal(result, targetObj);
            be.err.equal(result, {a: 4, b: 5, c: 3});
        });

        it('exclude properties, should be return true', () => {
            let result = defaulty({a: 4, b: 5}, {a: 1, b: 2, c: 3}, ['c']);
            console.log(result);
            be.err.equal(result, {a: 4, b: 5});
        });

        it('should be return false', () => {
            let result = defaulty({a: 4, b: 5}, {a: 1, b: 2, c: 3});
            console.log(result);
            be.err.not.equal(result, {a: 4, b: 5});
        });
    });

    describe('defaults clone', function () {
        it('should be return true', () => {
            let targetObj = {a: 4, b: 5};
            const defaultObj = {a: 1, b: 2, c: 3};
            let result = defaulty.copy(targetObj, defaultObj);
            console.log(targetObj);
            console.log(result);
            be.err.not.equal(result, targetObj);
            be.err.equal(result, {a: 4, b: 5, c: 3});
        });

        it('exclude properties, should be return true', () => {
            let result = defaulty.copy({a: 4, b: 5}, {a: 1, b: 2, c: 3}, ['c']);
            console.log(result);
            be.err.equal(result, {a: 4, b: 5});
        });
    });

    describe('defaults, deep', function () {
        it('should be return true', () => {
            let result = defaulty({a: 4, b: 5, d: {a: 1}}, {a: 1, b: 2, c: 3, d: {a: 5, b: 2}});
            console.log(result);
            be.err.equal(result, {a: 4, b: 5, c: 3, d: {a: 1, b: 2}});
        });

        it('exclude properties, should be return true', () => {
            let result = defaulty({a: 4, b: 5, d: {a: 1}}, {a: 1, b: 2, c: 3, d: {a: 5, b: 2}, z: 2}, ['z']);
            be.err.equal(result, {a: 4, b: 5, c: 3, d: {a: 1, b: 2}});
        });
    });

});