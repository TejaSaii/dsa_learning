/**
 * @param {number} n
 * @return {string[]}
 * using a queue data structure
 */
var generateParenthesis = function(n) {
    const combos = [];
    let dfs = (leftCount, rightCount, currCombo) => {
        let isBaseCase = leftCount === n && rightCount === n;
        if(isBaseCase) {
            combos.push(currCombo);
            return;
        }
        if(leftCount < n) {
            dfs(leftCount + 1, rightCount, `${currCombo}(`);
        }
        if(rightCount < leftCount) {
            dfs(leftCount, rightCount + 1, `${currCombo})`);
        }
    }

    dfs(0, 0, '');
    return combos;
};

console.log(generateParenthesis(1));

