
function clickNum(value) {
    document.getElementById('displayOn').value += value;
        document.getElementById("displayOff").value = "";

}  

function clickEqual() {
     document.getElementById("displayOff").style.display = "block";
    var calculation = eval(document.getElementById("displayOn").value);
    document.getElementById("displayOff").value +=  calculation;
    

}

function clickAc() {
    document.getElementById("displayOn").value = '';
    document.getElementById("displayOff").value = '';
}
function clickDel() {
    let allSelect = document.getElementById("displayOn").value;
    let piece = allSelect.length;
    let lastNumber = allSelect.slice(0, piece - 1);
    document.getElementById("displayOn").value = lastNumber;
    
}

