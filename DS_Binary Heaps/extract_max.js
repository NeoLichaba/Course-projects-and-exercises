/* Take out the element from the root.( it will be minimum in case of Min-Heap and maximum in case of Max-Heap).
Take out the last element from the last level from the heap and replace the root with the element.
Perform Sink-Down.*/

class MaxBinaryHeap {
    constructor() {
        this.values  = [55, 39, 41, 18, 27, 12, 33];
        // this.values  = [];
        document.write("- Current MaxBinaryHeap array:" + "" + this.values + "<br/>");
    }
    insert(element) {
        this.values.push(element);                          //push value into values property on the heap
        this.bubbleUp();                                    //Bubble the value up to its correct spot. Find parent of value inserted
    }
    bubbleUp() {
        let idx = this.values.length - 1;                   //variable created with a length minus 1. Keeps track of whether the newly created idx is
        const element = this.values[idx];                   //stores value of element. 
        while (idx > 0) {                                   //loop created
            let parentIdx = Math.floor((idx - 1) / 2);      //1: find index of parent and floor (round down)
            let parent = this.values[parentIdx];            //2: Create separate variable, comparing
            if (element <= parent) break;                   //keep looping for as long as a parentIndex < child index
            this.values[parentIdx] = element;               //swap values at parentIndex with value at child index
            this.values[idx] = parent;                      //swap values at parentIndex with value at child index
            idx = parentIdx;                                //start over
            document.write("- Swapped parent is: " + parent + "<br/>");
        }
    }
                                                            //Extract: Removing from a heap
    extractMax() {
        const max = this.values[0];                         //stores value of max (0) to root (55)
        const end = this.values.pop();                      //removes the last value within your array (33)
        document.write ("- Highest number extracted is:" + ""+ max + "<br/>");
        if (this.values.length > 0) {                       //check if there is a value, return it and then begin sink down
            this.values[0] = end;                           //take the last value of the array (12) and places it first
            this.sinkDown();                                //defines sinkDown method
            document.write ("Inspecting MaxBinaryHeap:" + this.values + "</br>");
            return max;                                     //return maximum value    
        }
        
    }
                                                            //Sinkdown: Adjust
                                                            //Compare parent/child values
    sinkDown() {                                            //defines the sinkdown method
        let idx = 0;                                        //begins at index 0 (33) and then finds its children
        const length = this.values.length;                  //find values = length of array (6)
        const element = this.values[0] ;                    //element will be set to index 0 = 33
        // document.write ("MaxBinaryHeap before sorting:" + this.values + "</br>");
        while (true) {                                      //while loop is set
            let leftChildIdx = (2 * idx) + 1;               //Find index of the left child, comparing value at the parent - ensure not outbound
            let rightChildIdx = (2 * idx) + 2;              //Find index of the right child, comparing value at the parent - ensure not outbound
            let leftChild, rightChild;                      //declare left/right child variables
            
            let swap = null;                                //checks if any swaps were made (break method comes into place)

            if (leftChildIdx < length) {                    //check if inbounds (i.e. valid) using length of the array
                leftChild = this.values[leftChildIdx]       //set value of index derived (i.e 39)
                if (leftChild > element) {                  //compare it to element
                    swap = leftChildIdx;                    //keep track of position to be swapped with
                    document.write(" - Leftchild of:" + element + "is" + "" + leftChild + "</br>)");
                }
            }
            if (rightChildIdx < length) {                   //check if inbounds (i.e. valid) using length of the array
                rightChild = this.values[rightChildIdx];    //set value of index derived (i.e 39)
                if (
                    swap === null && rightChild > element || //if we have not swapped and rightChild> element OR we have swapped
                    swap !== null && rightChild > leftChild  //but the rightChild > leftChild. Condition set to ensure that 
                                                             //we are swopping with the right child
                ) {
                    swap = rightChildIdx;                    //swap the larger number element and make that the rightChildIdx
                    document.write("- Rightchild of:" + element + "is" + "" + rightChild + "</br>");
                    document.write("- MaxBinaryHeap during sinkdown:" + "" + this.values + "<br/>");
                }
            }

            if (swap === null) break;                           //if there is no child, breaks out of the while loop. 
            this.values[idx] = this.values[swap];               //conduct swap. It will either be the index of the right/left child
            this.values[swap] = element;                        //saved in variable
            idx = swap;                                         //update index
        }
        document.write ("- Final MaxBinaryHeap array:" + "" + this.values + "<br/>");
    }
}

let heap = new MaxBinaryHeap;
 document.write ("Inspecting MaxBinaryHeap:" + this.values + "</br>");
heap.extractMax();



