function ListNode(val){
    this.val = val;
    this.next = null;
}
var reverseList = function(head) {
    var previous = null;
    while (head) {
        var save = head.next;
        head.next = previous;
        previous = head;
        head = save;
    }
    return previous;
}

var removeElements = function(head,val){
    if(head === null) return null;
    var node = new ListNode(0)
    var pre = node;
    node.next = head;
    while (head !== null) {
        if (head.val !== val) {
            pre = head;
            head = head.next;
        }else {
            pre.next = head.next;
            head = head.next;
        }
    }
    return node.next;
}

var mergeTwoLists = function(l1,l2){
    var res = new ListNode(0);
    var current = res;
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            current.next = l2.val;
            l2 = l2.next;
            current = current.next;
        }else {
            current.next = l1.val;
            l1 = l1.next;
            current = current.next;
        }
    }
    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }
    return res.next;
}
var deleteDuplicates = function(head){
    if (head === null || head.next === null) {
        return head;
    }
    var cur = head;
    // var previous = null;
    while (cur.next !== null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        }else {
            cur = cur.next;
        }
    }
    return head;
}
