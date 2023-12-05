
 

async function lometo_partition(l, r,fv,delay = 700) { 
console.log(r);

var blocks = document.querySelectorAll(".bar"); 
// Storing the value of pivot element 
var pivot = 
Number(blocks[r].childNodes[0].innerHTML); 
var i = l - 1; 
blocks[r].style.backgroundColor = "red"; 
document. 
getElementsByClassName("range")[0].innerText = `[${l},${r}]`; 

for (var j = l; j <= r - 1; j++) { 
	// To change background-color of the 
	// blocks to be compared 
	blocks[j].style.backgroundColor = "yellow"; 
	// To wait for 700 milliseconds 
	await new Promise((resolve) => 
	setTimeout(() => { 
		resolve(); 
	}, delay) 
	); 
	var value = 
	Number(blocks[j].childNodes[0].innerHTML); 

	// To compare value of two blocks 
	if (value < pivot) { 
	i++; 
	var temp1 = blocks[i].style.height; 
	var temp2 = blocks[i].childNodes[0].innerText; 
	blocks[i].style.height = blocks[j].style.height; 
	blocks[j].style.height = temp1; 
	blocks[i].childNodes[0].innerText = 
	blocks[j].childNodes[0].innerText; 
	blocks[j].childNodes[0].innerText = temp2; 
	blocks[i].style.backgroundColor = "orange"; 
	if (i != j) blocks[j].style.backgroundColor = "pink"; 
	//To wait for 700 milliseconds 
	await new Promise((resolve) => 
		setTimeout(() => { 
		resolve(); 
		}, delay) 
	); 
	} else blocks[j].style.backgroundColor = "pink"; 
} 
// Swapping the ith with pivot element 
i++; 
var temp1 = blocks[i].style.height; 
var temp2 = blocks[i].childNodes[0].innerText; 
blocks[i].style.height = blocks[r].style.height; 
blocks[r].style.height = temp1; 
blocks[i].childNodes[0].innerText = 
blocks[r].childNodes[0].innerText; 
blocks[r].childNodes[0].innerText = temp2; 
blocks[r].style.backgroundColor = "pink"; 
blocks[i].style.backgroundColor = "green"; 

// To wait for 300 milliseconds 
await new Promise((resolve) => 
	setTimeout(() => { 
	resolve(); 
	}, delay ) 
); 
document.getElementsByClassName("range")[0].innerText = ""; 
for (var k = 0; k <fv; k++) 
blocks[k].style.backgroundColor = "#6b5b95"; 
return i; 
} 

// Asynchronous QuickSort function 
async function QuickSort(l, r,fv, delay = 100) { 
   console.log(r);
if (l < r) { 
	// Storing the index of pivot element after partition 
	var pivot_idx = await lometo_partition(l,r,fv); 
	// Recursively calling quicksort for left partition 
	await QuickSort(l, pivot_idx - 1,fv); 
	// Recursively calling quicksort for right partition 
	await QuickSort(pivot_idx + 1, r,fv); 
} 
} 



// Calling QuickSort function 


function QSort(){
	const nameSOfSort = document.getElementById('sortName');
	const node = document.createElement('span');
	node.setAttribute('id','heading');
	node.innerHTML ="Quick Sort";
	nameSOfSort.appendChild(node);
   
    // var cl = document.querySelectorAll(".bar"); 
    
    QuickSort(0,document.querySelectorAll(".bar").length-1,document.querySelectorAll(".bar").length);
	document.getElementById("rArray").disabled = false; 
  document.getElementById("rArray").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("sSort").disabled = false; 
  document.getElementById("sSort").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("iSort").disabled = false; 
  document.getElementById("iSort").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("bSort").disabled = false; 
  document.getElementById("bSort").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("mSort").disabled = false; 
  document.getElementById("mSort").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("qSort").disabled = false; 
  document.getElementById("qSort").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("shSort").disabled = false; 
  document.getElementById("shSort").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("cSize").disabled = false; 
  document.getElementById("cSize").style.backgroundColor = "#d8b6ff";
  nameSOfSort.removeChild(node); 
}


