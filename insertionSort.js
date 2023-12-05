 async function InsertionSort(delay = 600) { 
  const nameSOfSort = document.getElementById('sortName');
  const node = document.createElement('span');
  node.setAttribute('id','heading');
  node.innerHTML ="Insertion Sort";
  nameSOfSort.appendChild(node);
  let bars = document.querySelectorAll(".bar"); 
  
  // Provide lightgreen colour to 0th bar 
  bars[0].style.backgroundColor = " rgb(49, 226, 13)"; 
  for (var i = 1; i < bars.length; i += 1) { 
  
    // Assign i-1 to j 
    var j = i - 1; 
  
    // To store the integer value of ith bar to key  
    var key =  
    parseInt(bars[i].childNodes[0].innerHTML); 
  
    // To store the ith bar height to height 
    var height = bars[i].style.height; 
     
    // For selecting section having id "ele" 
    var barval=document.getElementById("name") 
  
    // For dynamically Updating the selected element 
      barval.innerHTML= 
      `<h3>Element Selected is :${key}</h3>`; 
  
    //Provide darkblue color to the ith bar  
    bars[i].style.backgroundColor = "darkblue"; 
      
    // To pause the execution of code for 600 milliseconds 
    await new Promise((resolve) => 
    setTimeout(() => { 
      resolve(); 
    }, 600) 
  ); 
  
    // For placing selected element at its correct position  
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) { 
        
      // Provide darkblue color to the jth bar 
      bars[j].style.backgroundColor = "darkblue"; 
        
      // For placing jth element over (j+1)th element 
      bars[j + 1].style.height = bars[j].style.height; 
      bars[j + 1].childNodes[0].innerText =  
      bars[j].childNodes[0].innerText; 
  
      // Assign j-1 to j 
      j = j - 1; 
  
      // To pause the execution of code for 600 milliseconds 
      await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 600) 
      ); 
        
      // Provide lightgreen color to the sorted part 
      for(var k=i;k>=0;k--){ 
        bars[k].style.backgroundColor = " rgb(49, 226, 13)"; 
      } 
    } 
  
    // Placing the selected element to its correct position 
    bars[j + 1].style.height = height; 
    bars[j + 1].childNodes[0].innerHTML = key; 
       
    // To pause the execution of code for 600 milliseconds 
    await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, 600) 
    ); 
      
    // Provide light green color to the ith bar 
    bars[i].style.backgroundColor = " rgb(49, 226, 13)"; 
  } 
  
  barval.innerHTML="<h3>Sorted!!!</h3>"; 
    
  // To enable the button  
  // "Generate New Array" after final(sorted) 
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
  
