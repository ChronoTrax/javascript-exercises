const caesar = function(str, shift) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let character = str.charCodeAt(i);
        if ((character > 96 && character < 123)) { // lower alpha (a-z)
            if (shift >= 0) {
                let newChar = String.fromCharCode((character + shift - 97) % 26 + 97);
                newStr = newStr.concat(newChar);
            } else {
                let newChar = String.fromCharCode((character + shift - (97 - 26)) % 26 + 97);
                newStr = newStr.concat(newChar);
            }
        }
        else if ((character > 64 && character < 91)) { // upper alpha (A-Z)
            if (shift >= 0) {
                let newChar = String.fromCharCode((character + shift - 65) % 26 + 65);
                newStr = newStr.concat(newChar);
            } else {
                let newChar = String.fromCharCode((character + shift - (65 - 26)) % 26 + 65);
                newStr = newStr.concat(newChar);
            }
        } else {
            newStr = newStr.concat(str[i]);
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
