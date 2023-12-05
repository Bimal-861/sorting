

 

async function SelectionSort() { 
    
    
            const nameSOfSort = document.getElementById('sortName');
            const node = document.createElement('span');
            node.setAttribute('id','heading');
            node.innerHTML ="Selection Sort";
            nameSOfSort.appendChild(node);
    let bars = document.querySelectorAll(".bar"); 
    // Assign 0 to min_idx 
    var min_idx = 0; 
    for (var i = 0; i < bars.length; i += 1) { 
    
        // Assign i to min_idx 
        min_idx = i; 
    
        // Provide darkblue color to the ith bar 
        bars[i].style.backgroundColor = "darkblue"; 
        for (var j = i + 1; j < bars.length; j += 1) { 
    
        // Provide red color to the jth bar 
        bars[j].style.backgroundColor = "red"; 
            
        // To pause the execution of code for 300 milliseconds 
        await new Promise((resolve) => 
            setTimeout(() => { 
            resolve(); 
            }, 300) 
        ); 
    
        // To store the integer value of jth bar to var1 
        var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
    
        // To store the integer value of (min_idx)th bar to var2 
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 
            
        // Compare val1 & val2 
        if (val1 < val2) { 
            if (min_idx !== i) { 
    
            // Provide skyblue color to the (min-idx)th bar 
            bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)"; 
            } 
            min_idx = j; 
        } else { 
    
            // Provide skyblue color to the jth bar 
            bars[j].style.backgroundColor = " rgb(24, 190, 255)"; 
        } 
        } 
    
        // To swap ith and (min_idx)th bar 
        var temp1 = bars[min_idx].style.height; 
        var temp2 = bars[min_idx].childNodes[0].innerText; 
        bars[min_idx].style.height = bars[i].style.height; 
        bars[i].style.height = temp1; 
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
        bars[i].childNodes[0].innerText = temp2; 
        
        // To pause the execution of code for 300 milliseconds 
        await new Promise((resolve) => 
        setTimeout(() => { 
            resolve(); 
        }, 300) 
        ); 
    
        // Provide skyblue color to the (min-idx)th bar 
        bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)"; 
    
        // Provide lightgreen color to the ith bar 
        bars[i].style.backgroundColor = " rgb(49, 226, 13)"; 
        
        
        
    } 
    
    // To enable the button "Generate New Array" after final(sorted) 
    // enable();
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
   
