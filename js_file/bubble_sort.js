/*
       Done by Ranvir Kumar
       -----------------------------------------------
            Bubble Sort Algorithm Visualization
       -----------------------------------------------
*/

async function bubbleSort(array)
{
    disable_btns();
    for (let i = 0; i < array.length - 1; i++)
    {
        for (j = 0; j < array.length - i - 1; j++)
        {
            if(i<j) bars[i].style.backgroundColor = "yellow";  // Color update
            
            // Placing largest element at the end
            if (array[j] > array[j + 1])
            {
                bars[j].style.backgroundColor = "red";  // Color update
                bars[j+1].style.backgroundColor = "red";  // Color update

                let t = array[j];
                array[j] = array[j+1];
                array[j+1] = t;

                bars[j].style.height = (array[j]*5) + "px";  // Height update
                bars[j+1].style.height = (array[j+1]*5) + "px"; // Hieght update

                bars[j].style.backgroundColor = "blue";  // Color update
                bars[j].style.backgroundColor = "blue";  // Color update
                await sleep(algo_speed);
            }
            bars[j].style.backgroundColor = "aqua";  // Color update
        }
        await sleep(algo_speed);
        bars[j].style.backgroundColor = "green";  // Color update
    }
    bars[0].style.backgroundColor = "green";  // Color update
   
    enable_btns(); 
}

let bubble_sort_btn = document.getElementById("bubble-sort");

bubble_sort_btn.addEventListener("click",function (){
    
    let Tc = document.getElementById("time-complexity");
    let Sc = document.getElementById("space-complexity");
    Tc.innerHTML = "Worst case: O(N^2) <br/> Average case: Θ(N^2) <br/> Best case: Ω(N)";
    Sc.innerHTML = "Worst case: O(1)";

    bubbleSort(unsorted_array);  // Calling the bubble sort function
});