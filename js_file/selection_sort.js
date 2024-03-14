/*
       Done by ranvir Kumar
       -----------------------------------------------
            Selection Sort Algorithm Visualization
       -----------------------------------------------
*/


// Selects the minimum element and place it to its correct position 
async function selectionSort(array)
{
    disable_btns();
    let i, j, min_idx;
 
    for (i = 0; i < array.length - 1; i++)
    {
        bars[i].style.backgroundColor = "red";  // Color update
        min_idx = i;

        // Finding the smallest element index eac time in the unsorted part
        for (j = i+1; j < array.length; j++)
        {
            bars[j].style.backgroundColor = "yellow";  // Color update
            await sleep(algo_speed);  
            
            if (array[j] < array[min_idx])
            {
                bars[min_idx].style.backgroundColor = "aqua"; // Color update

                min_idx = j;  

                bars[min_idx].style.backgroundColor = "red";  // Color update
            }
            else
            {
                bars[j].style.backgroundColor = "aqua";  // Color update
            }
        }
      
        // Placing the minimum element to its correct position
        if(min_idx!=i)
        {
            let temp = array[min_idx];
            array[min_idx] = array[i];
            array[i] = temp;

            bars[min_idx].style.height = array[min_idx]*5 + "px";  // Height update
            bars[i].style.height = array[i]*5 + "px";  // Height update

            bars[min_idx].style.backgroundColor = "aqua";  // Color update
        } 
        await sleep(algo_speed);
        bars[i].style.backgroundColor = "green";  // Color update
    }
    bars[i].style.backgroundColor = "green"; // Color update
    
    enable_btns();
}

let selection_sort_btn = document.getElementById("selection_sort");

selection_sort_btn.addEventListener("click",function (){
    let Tc = document.getElementById("time-complexity");
    let Sc = document.getElementById("space-complexity");
    Tc.innerHTML = "Worst case: O(N^2) <br/> Average case: Θ(N^2) <br/> Best case: Ω(N^2)";
    Sc.innerHTML = "Worst case: O(1)";

    selectionSort(unsorted_array);  // Calling selection sort function
});