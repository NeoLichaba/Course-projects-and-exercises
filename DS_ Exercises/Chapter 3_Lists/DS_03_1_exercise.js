/* 1. Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.*/

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.toString = toString;
    this.append = append;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.greaterThanInsert = greaterThanInsert;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}

function greaterThanInsert(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (element > this.dataStore[i]) {
            this.dataStore[this.listSize++] = element;
            break;
        }
    }
}

var myList = new List();
myList.append(10);
myList.append(100);
myList.append(1000);
myList.append(10000);
myList.append(100000);
myList.greaterThanInsert(1000000);
console.log(10);
