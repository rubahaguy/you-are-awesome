// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propName) => {
    Object.defineProperty(Object.prototype, propName, {
        get: () => {
            return propName;
        },
        set: (prop) => {
            propName = prop;
        },
        enumerable: false});
    return propName;
};
const createProtoMagicObject = () => {
    const notObj = function() {

    }
    notObj.__proto__ = notObj.prototype;
    return notObj;
};
Function.prototype.valueOf = function() {return counter};
let counter = 0;
const incrementor = () => {
    counter++;
    return incrementor;

};
let asyncCounter = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        asyncCounter++;
        return resolve(asyncCounter);
    })
};
const createIncrementer = () => {
    return {
        value: 0,
        next: function() {
            this.value++;
            console.log(this.value);
            return this;
        },
        [Symbol.iterator]: function() {
            return {
                next: () => {
                    return this.next()
                },
            };
        }
    }

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1100)
    });
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a, b) => (a.__proto__ - b.__proto__));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
