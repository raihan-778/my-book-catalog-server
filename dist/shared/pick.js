"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const finalObj = {};
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            // "Object.hasOwnProperty" will check the object if the key exists as won property.Then it will call a function as "Object.getOwnProperty.call" which will take two properties "object & key"
            finalObj[key] = obj[key]; // by using this line we have appended object value to his respective property.
        }
    }
    return finalObj;
};
exports.default = pick;
