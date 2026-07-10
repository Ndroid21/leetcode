var Node = function (val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }

    console.log(this.head);

    if (index === 0) {
        return this.head.val;
    }

    let curr = this.head;
    for (let i = 1; i <= index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
        this.length++;
        return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
        this.length++;
        return;
    }

    let curr = this.head;
    while (curr.next) {
        curr = curr.next;
    }

    curr.next = newNode;
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) {
        return;
    }

    const newNode = new Node(val);
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return;
    }

    let curr = this.head;
    for (let i = 1; i <= index - 1; i++) {
        curr = curr.next;
    }

    let temp = curr.next;
    curr.next = newNode;
    newNode.next = temp;
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) {
        return;
    }

    if (index === 0) {
        if (this.length === 1) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return;
    }

    let curr = this.head;
    for (let i = 1; i <= index - 1; i++) {
        curr = curr.next;
    }

    curr.next = curr.next.next;
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */