class MaxBinaryHeap {                                   //Defines the class
    constructor() {
        this.values = [41,39,33,18,27,12];              //Defines the property (values): initialises the heap/array
    }
    insert(element) {                                   //creates the insert method
        this.values.push(element);                      //Takes an element and inserts it into our array of values, and pushes it to the end
        this.bubbleUp();                                //Defines the bubbleUp method
    }
    bubbleUp() {
        let idx = this.values.length - 1;               //creates a variable called idx and finds the last element in our array
        const element = this.values[idx];               //creates a variable to store the element
        while (idx > 0) {                               //creates a while loop that determines if the element should be swaped or not
            let parentIdx = Math.floor((idx - 1) / 2);  //finds the parent of the element
            let parent = this.values[parentIdx];        //compares the element to the parent
            if (element <= parent) break;               //If less stop the loop 
            this.values[parentIdx] = element;           //Otherwise make the idx the parent
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

function run() {
    let heap = new MaxBinaryHeap();                     //creates our heap
    heap.insert(55);                                    //inserts our element (55) into our array
}

