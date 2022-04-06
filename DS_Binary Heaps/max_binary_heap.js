class MaxBinaryHeap {
    constructor() {
        this.values = [];
        this.heap = heap;

    }
    insert(element) {
        this.values.push(element);//push value into values property on the heap
        this.bubbleUp(); //Bubble the value up to its correct spot. Find parent of value inserted
    }
    bubbleUp() {
        let idx = this.values.length - 1; //variable created with a length minus 1. Keeps track of whether the newly created idx is
        const element = this.values[idx]; //stores value of element. 
        while (idx > 0) { //loop created
            let parentIdx = Math.floor((idx - 1) / 2); //1: find index of parent and floor (round down)
            let parent = this.values[parentIdx]; //2: Create separate variable, comparing
            if (element <= parent) break;//keep looping for as long as a parentIndex < child index
            this.values[parentIdx] = element; //swap values at parentIndex with value at child index
            this.values[idx] = parent; //swap values at parentIndex with value at child index
            idx = parentIdx; //start over

        }
        // }
    }
}

var heap = new MaxBinaryHeap;
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);










// var list = [41,39,33,18,27,12,55];
//Adding to a Max Binary Heap

// var index = values -1;
// var parentIndex {
//     for var = i; i<
//     (Math.floor((index-1)/2));

// }