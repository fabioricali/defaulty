'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copies deep missing properties to the target object
 * @param targetObj {Object} target object
 * @param defaultObj {Object} default object
 * @param exclude {Array} exclude properties from copy
 * @returns {*}
 */

var defaulty = function defaulty(targetObj, defaultObj) {
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    for (var i in defaultObj) {
        /* istanbul ignore else  */
        if (defaultObj.hasOwnProperty(i) && exclude.indexOf(i) === -1) {
            if (!targetObj.hasOwnProperty(i) || typeof targetObj[i] === 'undefined') {
                targetObj[i] = defaultObj[i];
            } else if (_typeof(targetObj[i]) === 'object') {
                defaulty(targetObj[i], defaultObj[i]);
            }
        }
    }
    return targetObj;
};

/**
 * Creates new target object and copies deep missing properties to the target object
 * @param args[0] {Object} target object
 * @param args[1] {Object} default object
 * @param args[2] {Array} exclude properties from copy
 * @returns {*}
 */
var copy = function copy() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    args[0] = Object.assign({}, args[0]);
    return defaulty.apply(undefined, args);
};

module.exports = defaulty;
module.exports.copy = copy;
//# sourceMappingURL=defaulty.js.map