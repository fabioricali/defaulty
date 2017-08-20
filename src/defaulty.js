/**
 * Copies deep missing properties to the target object
 * @param targetObj {Object} target object
 * @param defaultObj {Object} default object
 * @param exclude {Array} exclude properties from copy
 * @returns {*}
 */

const defaulty = (targetObj, defaultObj, exclude = []) => {
    for (let i in defaultObj) {
        if (defaultObj.hasOwnProperty(i) && exclude.indexOf(i) === -1)
            if (!targetObj.hasOwnProperty(i)) {
                targetObj[i] = defaultObj[i];
            } else {
                if (typeof targetObj[i] === 'object') {
                    defaulty(targetObj[i], defaultObj[i]);
                }
            }
    }
    return targetObj;
};

module.exports = defaulty;