


/* 3. Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.*/

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.displayPeople = displayPeople;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
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
function displayPeople() {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "F") {
            female.append(this.dataStore[i]);
        }
    }
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "M") {
            male.append(this.dataStore[i]);
        }
    } 
    console.log("\nFemales: ");
    for(var f = 0; f < female.dataStore.length; f++){   
        console.log("\t" + female.dataStore[f].name);
    }
    console.log("\nMales: ");
    for(var m = 0; m < male.dataStore.length; m++){
        console.log("\t" + male.dataStore[m].name);
    }
}

var male = new List;
var female = new List;
var people = new List;

function run() {
var person01 = new person("Hassan", "M");
var person02 = new person("Byron", "M");
var person03 = new person("Neo", "F");
var person04 = new person("Thlokomelo", "F");
var person05 = new person("Kgoro", "M");
var person06 = new person("Cameron", "M");
var person07 = new person("Lethabo", "M");
var person08 = new person("Romina", "F");
var person09 = new person("Cassie", "F");
var person10 = new person("Sean", "M");


people.append(person01);
people.append(person02);
people.append(person03);
people.append(person04);
people.append(person05);
people.append(person06);
people.append(person07);
people.append(person08);
people.append(person09);
people.append(person10);
people.displayPeople();
}

