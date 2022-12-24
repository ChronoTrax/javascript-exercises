const palindromes = function (str) {
    let original = [];
    let size = 0;
    for (let i = 0; i < str.length; i++) {
        let character = str.toLowerCase().charCodeAt(i);
        if (!(character > 96 && character < 123)) { // lower alpha (a-z)
            continue;
        }
        original[size++] = character;
    }
    size = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        let character = str.toLowerCase().charCodeAt(i);
        if (!(character > 96 && character < 123)) { // lower alpha (a-z)
            continue;
        }
        if (original[size++] !== character) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
