/* 2. Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list.*/

function insert(element) {
    var insertPos = this.find(after);
    if (element < insertPos) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}