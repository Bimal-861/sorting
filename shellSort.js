

async function ShellSort(delay = 600) { 
    const nameSOfSort = document.getElementById('sortName');
    const node = document.createElement('span');
    node.setAttribute('id','heading');
    node.innerHTML ="Shell Sort";
    nameSOfSort.appendChild(node);
    
    let bars = document.querySelectorAll(".bar"); 
    var length =bars.length;
  
    for (var i = 10; i > 0; i = Math.floor(i / 2)) { 
  
        // To pause the execution of code 
        // for 300 milliseconds 
        await new Promise((resolve) => 
            setTimeout(() => { 
                resolve(); 
            }, 300) 
        ); 
  
        for (var j = i; j < length; j++) { 
            var temp = parseInt( 
                bars[j].childNodes[0].innerHTML); 
            var k; 
  
            var temp1 = bars[j].style.height; 
            var temp2 = bars[j].childNodes[0].innerText; 
  
            for ( 
                k = j; 
                k >= i && parseInt(bars[k - i] 
                    .childNodes[0].innerHTML) > temp; 
                k -= i 
            ) { 
                bars[k].style.height  
                        = bars[k - i].style.height; 
  
                bars[k].childNodes[0].innerText =  
                    bars[k - i].childNodes[0].innerText; 
  
                // To pause the execution of code 
                // for 300 milliseconds 
                await new Promise((resolve) => 
                    setTimeout(() => { 
                        resolve(); 
                    }, 300) 
                ); 
            } 
  
            // Provide darkblue color to the jth bar 
            bars[j].style.backgroundColor = "darkblue"; 
  
            // Provide darkblue color to the kth bar 
            bars[k].style.backgroundColor = "darkblue"; 
            bars[k].style.height = temp1; 
            bars[k].childNodes[0].innerText = temp2; 
  
            // To pause the execution of code for 
            // 300 milliseconds 
            await new Promise((resolve) => 
                setTimeout(() => { 
                    resolve(); 
                }, 600) 
            ); 
  
            // Provide skyblue color to the jth bar 
            bars[j].style.backgroundColor = "rgb(0, 183, 255)"; 
  
            // Provide skyblue color to the kth bar 
            bars[k].style.backgroundColor = "rgb(0, 183, 255)"; 
  
            // To pause the execution of code for 
            // 300 milliseconds 
            await new Promise((resolve) => 
                setTimeout(() => { 
                    resolve(); 
                }, 300) 
            ); 
        } 
    } 
    for (var x = 0; x < length; x++) { 
        bars[x].style.backgroundColor  
            = "rgb(49, 226, 13)"; 
    } 
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
  
    // To enable the button "Generate New Array" 
     
} 