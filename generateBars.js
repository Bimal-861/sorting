const container = document.querySelector(".data-container"); 


// function to generate bars 
function decrease(){
	
}
function generatebars(num) { 
	// 
    
//for loop to generate 20 bars 
for (let i = 0; i <num; i += 1) { 

	// To generate random values from 1 to 100 
	const value = Math.floor(Math.random() * 100) + 1; 
	
	// To create element "div" 
	const bar = document.createElement("div"); 

	// To add class "bar" to "div" 
	bar.classList.add("bar"); 

	// Provide height to the bar 
	bar.style.height = `${value * 3}px`; 

	// Translate the bar towards positive X axis 
	bar.style.transform = `translateX(${i * 30}px)`; 
	
	// To create element "label" 
	const barLabel = document.createElement("label"); 

	// To add class "bar_id" to "label" 
	barLabel.classList.add("bar_id"); 

	// Assign value to "label" 
	barLabel.innerHTML = value; 
	
	// Append "Label" to "div" 
	bar.appendChild(barLabel); 

	// Append "div" to "data-container div" 
	container.appendChild(bar); 
} 
} 
var count_container = 
document.getElementById("count"); 
function generate_idx(num) { 
for (var i = 0; i <num; i++) { 
	// Creating element div 
	var array_ele2 = document.createElement("div"); 

	// Adding class 'block2' to div 
	array_ele2.classList.add("block2"); 

	// Adding style to div 
	array_ele2.style.height = `${20}px`; 
	array_ele2.style.transform = `translate(${i * 30}px)`; 

	// Adding indexes 
	var array_ele_label2 = 
	document.createElement("label"); 
	array_ele_label2.classList.add("block_id3"); 
	array_ele_label2.innerText = i; 

	// Appending created elements to index.html 
	array_ele2.appendChild(array_ele_label2); 
	count_container.appendChild(array_ele2); 
} 
}

// var num =prompt('what is size of the bar ..')
// function to generate new random array 
generatebars(20);
generate_idx(20);	

function generate() 

{ 
	
		
	window.location.reload();


    

} 

