/*
       Done by Ranvir Kumar
       -----------------------------------------------
            Insertion Sort Algorithm Visualization
       -----------------------------------------------
*/

async function insertionSort(array) 
{ 
    disable_btns();

    for (let i = 1; i<array.length; i++)
    { 
        bars[i].style.backgroundColor = "yellow";  // Color update
        let key = array[i]; 
        let j = i - 1; 

        // Sorting the array from the begining, inserting smaller elements to its correct position
        while (j >= 0 && array[j] > key)
        { 
            bars[j].style.backgroundColor = "red";  // Color update
            await sleep(algo_speed);

            array[j + 1] = array[j]; 
           
            bars[j].style.height = array[j]*5 + "px";  // Height update
            bars[j+1].style.height = array[j+1]*5 + "px";  // Height update
           
            j = j - 1; 
        } 
        array[j + 1] = key; 
        bars[j+1].style.height = array[j+1]*5 + "px"; // Height update
        for(let s=0;s<i;s++)
        {
            bars[s].style.backgroundColor = "green";  // Color updating till shorted element
            await sleep(algo_speed);
        }
    } 
    bars[array.length-1].style.backgroundColor = "green";  // Color update

    enable_btns();
} 

let insertion_sort_btn = document.getElementById("insertion-sort");

insertion_sort_btn.addEventListener("click",function (){
    let Tc = document.getElementById("time-complexity");
    let Sc = document.getElementById("space-complexity");
    Tc.innerHTML = "Worst case: O(N^2) <br/> Average case: Θ(N^2) <br/> Best case: Ω(N)";
    Sc.innerHTML = "Worst case: O(1)";

    insertionSort(unsorted_array);  // Calling the insertion sort function
});