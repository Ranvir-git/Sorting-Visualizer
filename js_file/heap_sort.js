/*
       Done by Ranvir Kumar
       -----------------------------------------------
              Heap Sort Algorithm Visualization
       -----------------------------------------------
*/

// Max heapify function
async function heapify(array , N , i)
{
    let largest = i;  // Current node
    let l = 2 * i + 1;  // Left child index
    let r = 2 * i + 2;  // Right child index
 
    // If left child is larger than root
    if (l < N && array[l] > array[largest])
    {
        if(largest!=i)
        {
            bars[largest].style.backgroundColor = "aqua";  // Color update
        }
        largest = l;
        bars[largest].style.backgroundColor = "red";  // Color update
    }
        
 
    // If right child is larger than largest
    if (r < N && array[r] > array[largest])
    {
        if(largest!=i)
        {
            bars[largest].style.backgroundColor = "aqua";  // Color update
        }
        largest = r;
        bars[largest].style.backgroundColor = "red";  // Color update
    }
 
    // If largest is not root
    if (largest != i) 
    {
        bars[i].style.backgroundColor = "red";  // Color update
        bars[largest].style.backgroundColor = "red";  // Color update
        await sleep(algo_speed);

        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        bars[i].style.height = array[i]*5 + "px";  // Height update
        bars[largest].style.height = array[largest]*5 + "px";  // Height update

        bars[i].style.backgroundColor = "aqua";  // Color update
        bars[largest].style.backgroundColor = "aqua";  // Color update
 
        // Recursively heapify the affected sub-tree
        await heapify(array, N, largest);
    }
}
 
// function to do heap sort
async function heapSort(array , N)
{
    disable_btns();
    
    // Building heap by rearranging array elements
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
        await heapify(array, N, i);
 
    // One by one extracting an element from heap
    for (let i = N - 1; i > 0; i--)
    {
        // Moving current root to end of the array
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        bars[i].style.backgroundColor = "green";  // Color update
        await sleep(algo_speed);
        bars[i].style.backgroundColor = "yellow"; // Color update

        bars[0].style.height = array[0]*5 + "px";  // Height update
        bars[i].style.height = array[i]*5 + "px";  // Height update
 
        // calling max heapify on the reduced heap
        await heapify(array, i, 0);
        await sleep(algo_speed);

        bars[i].style.backgroundColor = "aqua";  // Color update
        await sleep(algo_speed);
        bars[i].style.backgroundColor = "green"; // Color update
    }
    bars[0].style.backgroundColor = "green";  // Color update
    
    enable_btns();
}

let heap_sort_btn = document.getElementById("heap-sort");

heap_sort_btn.addEventListener("click",function (){
    let Tc = document.getElementById("time-complexity");
    let Sc = document.getElementById("space-complexity");
    Tc.innerHTML = "Worst case: O(N log N) <br/> Average case:O(N log N) <br/> Best case: O(N log N)";  // Time complexity
    Sc.innerHTML = "Worst case: O(1)"; // Space Complexity
    heapSort(unsorted_array,numberOfBars);  // Calling heapsort function
});