module.exports = function check(str, bracketsConfig) {
    let modufyBrackets = bracketsConfig.map(e => e.join(''));
    let resultString = str;
    for (let i=0; i<str.length/2;i++) {
        let arr = [...modufyBrackets].filter(e => resultString.includes(e));
        let position = resultString.indexOf(arr.length ? arr[0] : null);
        if (position < 0) {
            break;
        } else {
            resultString = resultString.slice(0,position) + resultString.slice(position+2);
        }
    }
    return !resultString.length;
};
