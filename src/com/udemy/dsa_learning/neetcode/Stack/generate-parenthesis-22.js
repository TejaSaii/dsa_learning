/**
 * @param {number} n
 * @return {string[]}
 * using a queue data structure
 */
var generateParenthesis = function(n) {
    let combos = [];
    const queue = [ ['', 0, 0] ];
        
        while(queue.length !== 0){
            let [str, open, close] = queue.shift();
            let isBaseCase = open === n && close === n;
            if(isBaseCase) {
                combos.push(str);
                continue;
            }
            let isOpen = open < n;
            let isClose = close < open;

            if(isOpen){
                queue.push([ `${str}(`, open + 1, close ]);
            }
            if(isClose) {
                queue.push([ `${str})`, open, close + 1 ]);
            }
        }

        return combos;
};

console.log(generateParenthesis(3));

