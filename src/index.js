exports.min = function min(array) {
    return (!arguments.length || !array.length) ? 0 : Math.min(...array);
}

exports.max = function max(array) {
    return (!arguments.length || !array.length) ? 0 : Math.max(...array);
}

exports.avg = function avg(array) {
    return (!arguments.length || !array.length) ?
        0 : array.reduce((acc, item) => acc + item) / array.length;
}
