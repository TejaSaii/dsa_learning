class LRUCache {
    /**
    * @param {number} capacity
    */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = {};
        this.tail = {};

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /** 
    * @param {number} key
    * @return {number}
    */
    get(key) {
        let hasKey = this.map.has(key);
        if (!hasKey) return -1;

        let node = this.map.get(key);
        this.disconnectNode(node);
        this.moveToFront(node);

        return node.value;
    }

    disconnectNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    moveToFront(node) {
        let [prev, next] = [this.tail.prev, this.tail];
        this.tail.prev.next = node;
        this.tail.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /** 
    * @param {number} key 
    * @param {number} value
    * @return {void}
    */
    put(key, value) {
        let hasKey = this.get(key) !== -1;
        let isAtCapacity = this.capacity === this.map.size;

        if (hasKey) return (this.tail.prev.value = value);

        if(isAtCapacity) this.removeLastUsed();
        let node = { key, value };
        this.map.set(key,node);
        this.moveToFront(node);
    }

    removeLastUsed() {
        const [key, prev, next] = [this.head.next.key, this.head, this.head.next.next];
        this.map.delete(key);
        this.head.next = next;
        this.head.next.prev = prev;
    }

}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */