const deepCopy = require('deep-copy');

/**
 * Copies deep missing properties to the target object
 * @param targetObj {Object} target object
 * @param defaultObj {Object} default object
 * @param exclude {Array} exclude properties from copy
 * @returns {*}
 */

const defaulty = (targetObj, defaultObj, exclude = []) => {
    for (let i in defaultObj) {
        /* istanbul ignore else  */
        if (defaultObj.hasOwnProperty(i) && exclude.indexOf(i) === -1) {
            if (!targetObj.hasOwnProperty(i) || typeof targetObj[i] === 'undefined') {
                targetObj[i] = defaultObj[i];
            } else if (typeof targetObj[i] === 'object') {
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
const copy = (...args) => {
    //args[0] = Object.assign({}, args[0]);
    args[0] = deepCopy(args[0]);
    return defaulty.apply(this, args);
};

module.exports = defaulty;
module.exports.copy = copy;