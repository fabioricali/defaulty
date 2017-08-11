/**
 * Copies deep missing properties to the target object
 * @param targetObj {Object} target object
 * @param defaultObj {Object} default object
 * @returns {*}
 */
const defaulty = (targetObj, defaultObj) => {
    for (let i in defaultObj) {
        if(defaultObj.hasOwnProperty(i))
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

module.exports =  defaulty;