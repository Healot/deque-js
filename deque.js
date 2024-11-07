class Deque {
  constructor() {
    this.front = undefined;
    this.back = this.front;
  }

  addToFront(value) {
    if (this.front === undefined) {
      this.front = { value };
      this.back = this.front;
    } else {
      const newFront = { value: value, prev: this.front };
      this.front = newFront;
      this.front.next = this.front;
    }
  }

  addToBack(value) {
    if (this.front === undefined) {
      this.front = { value };
      this.back = this.front;
    } else {
      const newBack = { value: value, next: this.back };
      this.back = newBack;
      this.back.prev = this.back;
    }
  }

  getFront() {
    return this.front ? this.front.value : "empty";
  }

  getBack() {
    return this.back ? this.back.value : "empty";
  }

  removeFront() {
    const value = this.getFront();
    if (this.front === this.back) {
      this.front = undefined;
      this.back = undefined;
    } else {
      this.front = this.front.prev;
      this.front.next = undefined;
    }

    return value;
  }

  removeBack() {
    const value = this.getBack();
    if (this.front === this.back) {
      this.front = undefined;
      this.back = this.front;
    } else {
      this.back = this.back.next;
      this.back.next.back = undefined;
    }

    return value;
  }

  getAllDeque() {
    return this.front;
  }
}

const deque = new Deque();
