/*
       Done by Ranvir Kumar
       -----------------------------------------------
            Merge Sort Algorithm Visualization
       -----------------------------------------------
*/

// Function to merge the unsorted parts of the array in sorted form
async function merge(array,start,mid,end)
{
    let p=start,q=mid+1;
    let Arr=[],k=0;

    for(let i=start; i<=end; i++)
    {
        if(p>mid)  // Left array exhausted, simply copying right array elements
        {
            Arr[k++]=array[q++];
            bars[q-1].style.backgroundColor = "red";  // Color update
            await sleep(algo_speed);
        }
        else if(q>end)  // Right array exhausted, simply copying  left array elements
        {
            Arr[k++]=array[p++];
            bars[p-1].style.backgroundColor = "red";  // Color update
            await sleep(algo_speed);

        }
        else if(array[p] < array[q]) // compy left array element into Arr
        {
            Arr[k++]=array[p++];
            bars[p-1].style.backgroundColor = "red";  // Color update
            await sleep(algo_speed);
        }
        else  // Copy right array element into Arr
        {
            Arr[k++]=array[q++];
            bars[q-1].style.backgroundColor = "red"; // Color update
            await sleep(algo_speed);
        }
        
    }

    // Copying the temp Arr elements into original array 
    for(let t=0;t<k;t++)
    { 
        array[start++]=Arr[t];
        bars[start-1].style.height = (array[start-1])*5 + "px"; // Height update
        bars[start-1].style.backgroundColor = "green"; // Color update
        await sleep(algo_speed);
    }
}

// Recursively dividing the array into half parts
async function mergeSort(array,l,r) 
{
    disable_btns();
    if (l < r) 
    {
        let mid = Math.floor((l+r)/2);
        bars[mid].style.backgroundColor = "yellow";
        await sleep(algo_speed);
        
        await mergeSort(array,l, mid);
        await mergeSort(array,mid+1, r);

        await merge(array,l, mid, r);  // Calling merge function to merge the divided parts into sorted form
        await sleep(algo_speed);
    }
}

let merge_sort_btn = document.getElementById("merge-sort");

merge_sort_btn.addEventListener("click",async function (){
    let Tc = document.getElementById("time-complexity");
    let Sc = document.getElementById("space-complexity");
    Tc.innerHTML = "Worst case: O(N log N) <br/> Average case:O(N log N) <br/> Best case: O(N log N)";
    Sc.innerHTML = "Worst case: O(N)";
    
    await mergeSort(unsorted_array ,0 ,numberOfBars-1); // Calling the merge sort function
    enable_btns();
});