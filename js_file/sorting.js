let gen_array = document.getElementById("generate-array");
let bars_container = document.getElementById("bars_container");
let speed = document.getElementById("speed"); 
let algo_speed = (speed.value)*100;


// Using my own speed conversion mechanism 
algo_speed = 500 - algo_speed;
speed.addEventListener("change", function(){
    value=(this.value)*100;
    algo_speed = 500 - value;
},0);


// This is for the Math.random function to generate the elements between 1 to 100
let minRange = 1;
let maxRange = 100;

let numberOfBars;
let unsorted_array;

gen_array.addEventListener("click",helperFunction); 

// Taking the input value and validating some facts
function helperFunction()
{
    let array_size = document.getElementById("array_size").value;
    if(array_size == 0){
        alert("please enter array size between 0 to 70");
    }
    else if(array_size > 70)
    {
        alert("please enter array size between 0 to 70 -- for better experience")
    }
    else{
        numberOfBars = array_size;
        createRandomArray();
        bars_container.innerHTML="";
        generate_and_push_bars(unsorted_array);
    }
}

// Function to generate random numbers between 1 to 100
function randomNum(min,max)
{
    return Math.floor(Math.random() * (max-min+1)) + min;
}

// Create an unsorted array with random numbers
function createRandomArray()
{
    unsorted_array = new Array(numberOfBars);
    for(let i=0;i<numberOfBars;i++)
    {
        unsorted_array[i] = randomNum(minRange,maxRange);
    }
}

// Creates div elements of size array elements and pushing that into a container 
function generate_and_push_bars(array)
{
    bars_container.innerHTML= "";
    for(let i=0;i<array.length;i++)
    {
        let value = array[i];
        const bar = document.createElement("div");
        bar.classList.add("bars");
        bar.style.height=(value*5)+"px";
        if(numberOfBars<12)
        {
            bar.style.width= (30/numberOfBars)*5 + "px"; // For array_size<12, keeping the width smaller
        }
        else{
            bar.style.width= (200/numberOfBars)*5 + "px"; // For array size >= 12 adjusting the width to fit into the container
        }
        bar.style.marginLeft="5px";
        bar.style.backgroundColor="aqua";
        bar.style.color = "white";
        bars_container.appendChild(bar);
    }
}

// Now we have the access to the bars made of array elements
// Using this in entire sorting function
let bars = document.getElementsByClassName("bars");

// Hold the functioning to resolve some promises. So that we are able to see the effects
function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}

const btns = document.getElementsByTagName("button");
const inputArr = document.getElementById("array_size");

function disable_btns()
{
    for (const btn of btns) {
        btn.disabled = true;
        btn.style.cursor = "no-drop";
    }
    speed.disabled = true;
    inputArr.disabled = true;
}

function enable_btns()
{
    for (const btn of btns) {
        btn.disabled = false;
        btn.style = ":focus{box-shadow: 1px 8px 15px rgb(33, 104, 140);cursor:pointer}"
    }
    speed.disabled = false;
    inputArr.disabled = false;
}

window.addEventListener('load',
  function() {
    helperFunction();
  }, false);