const numLoop = () => {
    const numList = document.getElementById("num-list");
    const errorP = document.getElementById("error-nums");
    errorP.innerHTML="";
    
    //get starting number and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;
    
    console.log(`Looping from ${startNum} to ${endNum}.`);
    
    if (isNaN(startNum) || isNaN(endNum) || startNum.trim()=="" || endNum.trim()=="") {
        errorP.innerHTML = "You must enter number(s).";
        return;
    }
    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    if (startNum >= endNum) {
        errorP.innerHTML = "Ending number must be larger than the starting number."
        return;
    }


    //create an li for each number
    //and append it to the list
    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML= `My number: ${i}`; //or li.innerHTML = (i+1);
        numList.append(li);
    }
}

let counter = 0;
let updateCount;

const startStopCount = (e) => {
    const countP = document.getElementById('count-p');
    
    if (e.target.innerHTML.toLowerCase() == "start"){
        e.target.innerHTML = "Stop";
        updateCount = setInterval(()=>{
            counter++;
            countP.innerHTML = counter;
        }, 1000 /*1000 ms*/);
    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }
}

const showDetails = (e) => {
    const name = document.getElementById("one");
    name.innerHTML= e.target.getAttribute("rel1");
};

document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;
document.querySelectorAll("#toys li").forEach((li)=>{
    li.onclick = showDetails;
});
