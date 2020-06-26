class Dequeue {
  constructor(capacity = 10) {
    this._items = [];
    this._capacity = capacity;
  }

  get capacity() {
    return this._capacity;
  }

  get size() {
    return this._items.length;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  addFirst(e) {
    if (!this.isFull()) {
      return this._items.unshift(e);
    }
    return false;
  }

  addLast(e) {
    if (!this.isFull()) {
      return this._items.push(e);
    }
    return false;
  }

  removeFirst() {
    if (!this.isEmpty()) {
      return this._items.shift();
    }
    return false;
  }

  removeLast() {
    if (!this.isEmpty()) {
      return this._items.pop();
    }
    return false;
  }

  get first() {
    return this._items[0];
  }

  get last() {
    return this._items[this.size - 1];
  }
}


