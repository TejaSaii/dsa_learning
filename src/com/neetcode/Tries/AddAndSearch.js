class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}


class WordDictionary {

    constructor() {
        this.root = new TrieNode();
    }
    /** 
    * @param {string} word
    * @return {void}
    */
    addWord(word, cur = this.root) {
        for (const c of word) {
            if(!cur.children[c]) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.isWord = true;
    };

    /** 
    * @param {string} word
    * @return {boolean}
    */
    search(word) {
        return this.dfs(word, this.root, 0);
    };

    dfs(word, node, level) {
        if (!node) return false;

        if (word.length === level) return node.isWord;

        if (word[level] === '.') {
            return this.isWildcard(word, node, level);
        }

        return this.dfs(word, node.children[word[level]], level + 1);
    }

    isWildcard(word, node, level) {
        for (const char of Object.keys(node.children)) {
            const child = node.children[char];

            if(this.dfs(word, child, level + 1)) return true;
        }
        return false;
    }
};



/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
