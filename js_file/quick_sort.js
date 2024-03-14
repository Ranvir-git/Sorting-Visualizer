/*
       Done by Ranvir Kumar
       -----------------------------------------------
            Quick Sort Algorithm Visualization
       -----------------------------------------------
*/

// Partitions the array around a pivot element
async function partition (array, low, high) 
{ 
    let i = (low + 1);    // Indicates the right position of pivot found so far
    let pivot = array[low]; // Making the first elemnt as pivot element
    bars[low].style.backgroundColor = "blue";  // Color update
    
  
    for (let j = low + 1; j <= high; j++) 
    { 
        // Re-arranging the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (array[j] < pivot) 
        { 
            bars[j].style.backgroundColor = "yellow";  // Color update 
            await sleep(algo_speed);

            bars[i].style.backgroundColor = "red";  // Color update
            await sleep(algo_speed);
            bars[j].style.backgroundColor = "red";  // Color update

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            bars[i].style.height = array[i]*5 + "px";  // Height update
            bars[j].style.height = array[j]*5 + "px";  // Height update

            bars[i].style.backgroundColor = "red";  // Color update
            await sleep(algo_speed);
            bars[j].style.backgroundColor = "red";  // Color update

            bars[i].style.backgroundColor = "aqua";  // Color update
            await sleep(algo_speed);
            bars[j].style.backgroundColor = "aqua";  // Color update

            i+=1;
        } 
    } 
    bars[i-1].style.backgroundColor = "red";  // Color update
    bars[low].style.backgroundColor = "red";  // Color update

    // Putting the pivot element to it's correct position
    let temp = array[low];
    array[low] = array[i-1];
    array[i-1] = temp;

    bars[low].style.height = array[low]*5 + "px";  // Height update
    bars[i-1].style.height = array[i-1]*5 + "px";  // Height update

    for(let t=low;t<=i;t++)
    {
        bars[t].style.backgroundColor = "green";  // Color update
        await sleep(algo_speed);
    }

    return (i - 1); // Returning the position of the pivot
} 
  
async function quickSort(array, low, high) 
{ 
    disable_btns();

    if (low < high) 
    { 
        // Stores the position of pivet element
        let pi = await partition(array, low, high); 
  
        await quickSort(array, low, pi - 1); // sort the left side of pivot
        await quickSort(array, pi + 1, high); // sort the right side of pivot
        await sleep(algo_speed);
    } 
} 

let quick_sort_btn = document.getElementById("quick-sort");

quick_sort_btn.addEventListener("click",async function (){
    let Tc = document.getElementById("time-complexity");
    let Sc = document.getElementById("space-complexity");
    Tc.innerHTML = "Worst case: O(N log N) <br/> Average case:O(N log N) <br/> Best case: O(N log N)";
    Sc.innerHTML = "Worst case: O(log N)";

    await quickSort(unsorted_array,0,numberOfBars-1); // Calling quick sort function
    enable_btns();
});
 