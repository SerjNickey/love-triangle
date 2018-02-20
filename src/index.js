/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let sum = 0;

    preferences.forEach(function(item, i, array) {
        if(item > 0 && array[item-1] > 0 && i+1 !== array[item-1] && i+1 === array[array[item-1]-1]) {
            sum++;
        }
    });

    return sum/3;
};