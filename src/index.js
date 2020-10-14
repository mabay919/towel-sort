// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];

    if (!matrix) {
        return res;
    }
    let leng = matrix.length;
    for (let i = 0; i < leng; i += 1) {
        if (i % 2 === 0) {
            res = res.concat(matrix[i]);
        } else {
            res = res.concat(matrix[i].reverse());
        }
    }
    return res;
};
