/*
* 刚开始想到使用 while，不断判断 l1 和 l2 的 next，同时获取到 l1 和 l2 当前节点的 val，谁的 val 大，就挂在另一个节点的 next
*  上，后来发现走入了死循环，才发现原来是没有把链表的最新值修改，所以一直走不下去。
* 写了一个简单的单链表类，用来做生成新的一个简单的单链表。
* */

const mergeTwoLists = (l1, l2) => {
  const preHead = new ListNode(-1);

  let prev = preHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 === null ? l2 : l1;
  return preHead.next;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor(size = 10) {
    this._head = this._tail = null;
    this._size = size;
    this._capacity = 0;
  }

  get size() {
    return this._size;
  }

  isFull() {
    return this._size === this._capacity;
  }

  append(val) {
    if (this.isFull()) {
      return null;
    }

    const newListNode = new ListNode(val);

    if (!this._tail) {
      this._head = this._tail = newListNode;
    } else {
      this._tail.next = newListNode;
      this._tail = newListNode;
    }

    this._capacity++;
    return true;
  }
}
