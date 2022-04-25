//Priority Queue - each element has a priority (e.g hospital priority levels)
//Commonly implemented using a min heap, where lower numbers = higher priority
//Makes use of FIFO method - when priorities are the same, left child will go first
//Instead of storing single numbers, one stores nodes, with each node having a priority level

class PriorityQueue {                                                   //construct defined
    constructor() {
        this.values = [];                                               //values placed within an array
    }
    enqueue(val, priority) {                                             //object defined that will store the elements of the queue                                  
        let newNode = new Node(val, priority);                          //construct a new node accepting a value and priority
        this.values.push(newNode);                                      //value of the new node will represent priority
        this.bubbleUp();                                                //bubbles Up until it finds the correct spot based on its priority
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {                                                 //serves to find element with the highest priority code
        const min = this.values[0];                            //MINIMUM value stored to root
        const end = this.values.pop();                         //removes the last value within your array
        if (this.values.length > 0) {                            //check if there is a value, return it and then begin sink down
            this.values[0] = end;                              //take the last value of the array and places it last
            this.sinkDown();                                   //defines sinkDown method
        }
        return min;                                            //returns MINIMUM value
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {                         //check if leftChild.priority less than element.priority
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {                                             //check if inbounds (i.e. valid) using length of the array
                rightChild = this.values[rightChildIdx];                            //set value of index derived 
                if (
                    (swap === null && rightChild.priority < element.priority) ||    //if we have not swapped and rightChild priority level is less than the priority of the element 
                    (swap !== null && rightChild.priority < leftChild.priority)     //OR the swap has not happened but leftChild priority level is less than the rightChild
                ) {
                    swap = rightChildIdx;                                            //swap the nodes to reflect the rightChild index
                }
            }
            if (swap === null) break;                                                //if there is no child, breaks out of the while loop. 
            this.values[idx] = this.values[swap];                                   //conduct swap. It will either be the index of the right/left child
            this.values[swap] = element;                                            //saved in variable
            idx = swap;                                                             //index updated
        }
    }
    front() {
        return this.values[0];
    }

    back() {
        return this.values[this.values.length - 1];
    }

    empty() {
        return this.values.length == 0;
    }
    size() {
        return this.values.length;
    }
}

class Node {                                                            //define class Node
    constructor(val, priority) {                                         //parameters defined, taking on val and priority
        this.val = val;                                                 //comparison is done based on value
        this.priority = priority;                                       //priority used to build the heap
    }
}



function run() {
    let ER = new PriorityQueue();                                           //create a priority queue
    ER.enqueue("common cold", 5);                                           //add all the elements in a random order into this priority queue, using "enqueue"
    ER.enqueue("gunshot wound", 1);
    console.log("Front of line:" + ER.back());
    console.log(ER.front());
    console.log("Back of line: " + ER.back());
    console.log(ER.back());
    ER.enqueue("high fever", 4);
    ER.enqueue("broken arm", 2);
    ER.enqueue("glass in foot", 3);
    console.log("Number of people in line: " + ER.size());
    // console.log(ER.size());  
    console.log("Patients waiting to be seen:" + ER.size());
    let seen = ER.dequeue();
    console.log("Person being seen is:")
    console.log(ER.dequeue());
    ER.empty();
    if (ER.empty()) {
        console.log("Line is now empty.");
    }
    else {
        console.log("Number of people in line: " + ER.size());
        console.log(ER.size());
    }
    console.log(ER.toString());
    console.log("Next person seen is:")
    console.log(ER.dequeue());
    console.log("Next person seen is:")
    console.log(ER.dequeue());
    console.log("Next person seen is:")
    console.log(ER.dequeue());
    if (ER.empty()) {
        console.log("Line is now empty.");
    } 
}