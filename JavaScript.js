// Challenge #3 We have a nested object, we would like a function that you pass in the object and a key and get back the value

var obj,

obj = {
    a: {
        b: c,
        b: d
    },
    x: {
        y: z,
        y: a
    }
};

function getObjectKeys(object, key) {
    const keys = key.split('.');
    let obj = object;
    for (let ikey of keys) {
        for (let [objKey, value] of Object.entries(obj)) {
            if (!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}

console.log(getObjectKeys(obj, 'a.b.nested'));

console.log(getObjectKeys(obj, 'x.y'));