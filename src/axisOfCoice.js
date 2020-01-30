module.exports = function axisOfChoice(arr) {
    if (arr[0] === arr[1] || arr[2] === arr[3] || arr[0] === arr[2] || arr[2] === arr[3]) {
        return 'XY';
    }
    const min = Math.min.apply(null, arr);
    const index = arr.indexOf(min);
    return (index === 0 || index === 2) ? 'Y':'X';
};