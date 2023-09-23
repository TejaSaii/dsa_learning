
class TimeMap {
    /**
     * @constructor
     */
    constructor() {
        this.map = new Map();
    }
    /** 
     * @param {string} key 
     * @param {string} value 
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push([value, timestamp]);
        console.log(this.map.get(key));
    }
    /** 
     * @param {string} key 
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res = "";
        let arr = this.map.get(key);
        if(!arr) return res;
        let s = 0;
        let e = arr.length;

        while (s <= e) {
            let m = Math.floor((s + e) / 2);

            if (timestamp === arr[m][1]) {
                return arr[m][0];
            }

            if (arr[m][1] <= timestamp) {
                res = arr[m][0];
                s = m + 1;
            }
            else {
                e = m - 1;
            }
        }
        return res;
    }
};


/* Your TimeMap object will be instantiated and called as such:*/
var obj = new TimeMap()
obj.set("x","b",3);
var output = obj.get(["b",3]);
console.log(output);


