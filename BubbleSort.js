// Promise to swap two bars
const contain = document.querySelector(".data-container"); 
function swap(el1, el2) {
    return new Promise((resolve) => {
 
        // For exchanging styles of two bars
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
 
        window.requestAnimationFrame(function () {
 
            // For waiting for .25 sec
            setTimeout(() => {
                contain.insertBefore(el2, el1);
                resolve();
            }, 250);
    });
});
}
 
// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
    const nameSOfSort = document.getElementById('sortName');
    const node = document.createElement('span');
    node.setAttribute('id','heading');
    node.innerHTML ="Bubble Sort";
    nameSOfSort.appendChild(node);
    var bars = document.querySelectorAll(".bar");
 
    // BubbleSort Algorithm
    for (var i = 0; i < bars.length; i += 1) {
        for (var j = 0; j < bars.length - i - 1; j += 1) {
 
            // To change background-color of the
            // bars to be compared
            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
 
            // To wait for .1 sec
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
 
            console.log("run");
            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1]
                .childNodes[0].innerHTML);
 
            // To compare value of two bars
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar");
            }
 
            // Changing the color to the previous one
            bars[j].style.backgroundColor =  "#6b5b95" ;
            bars[j + 1].style.backgroundColor = "#6b5b95";
        }
 
        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i - 1]
            .style.backgroundColor ="#13CE66";
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
}