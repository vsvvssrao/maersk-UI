
function generateNumbers(){
    var arr = [];
    while(arr.length < 9){
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    return arr;
}

function CreateRandomNumber(nums){
    // var nums = generateNumbers();
    
    for (let index = 0; index < nums.length; index++) {
        var div = document.createElement("div");
        div.classList.add("num");
        div.appendChild(document.createTextNode(nums[index]));       
        document.getElementById("numDiv").appendChild(div);
    }
}
CreateRandomNumber(generateNumbers());
function OnSort(){

    var elems = document.getElementsByClassName("num");
    
    // convert nodelist to array
    var array = [];
    for (var i = elems.length >>> 0; i--;) { 
        array[i] = elems[i];
    }
    
    // perform sort
    array.sort(function(a, b) {
        return Number(a.innerHTML) - Number(b.innerHTML);      
    });
    
    // join the array back into HTML
    var output = "";
    for (var i = 0; i < array.length; i++) { 
        output += array[i].outerHTML;
    }
    
    
    document.getElementById('numDiv').innerHTML = output;
};

function OnShuffle(){


    
    document.getElementById('numDiv').innerHTML = "";
    CreateRandomNumber(generateNumbers());

};