var el = document.getElementById("Name").innerHTML = "This is NAbid";
//var el1 = document.getElementById("middle").innerHTML = "This is MiddlePart";

//var query = document.querySelector("#middle").innerHTML = "This is Mid



function Updatesentence() {
    var query = document.querySelector("#middle").innerHTML = "This is New Sentance";
}

function SetFirstToLastitem() {
    var firstName = document.getElementById("FirstName").value;
    document.getElementById("LastName").value = firstName;
    
}

//function addData()  {
//    var firstName = document.getElementById("FirstName").value;
//    document.getElementById("LastName").value = firstName;
//}

function RemoveLastitem() {

    document.getElementById("LastName").value = "";
}