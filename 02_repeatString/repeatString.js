const repeatString = function(str, count) {
    if (!Number.isInteger(count) || count < 0) {
        return "ERROR"
    }

    let newStr = ""
    for (let i = 0; i < count; i++) {
        newStr += str
    }
    return newStr
};

// Do not edit below this line
module.exports = repeatString;
