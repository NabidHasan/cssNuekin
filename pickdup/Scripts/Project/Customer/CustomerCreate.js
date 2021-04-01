/// /*<reference path="../../models/customer[.js" />*/

$(document).ready(function () {
    db = new Dbcontext();
    updateCustomerTable();

});


//(function () {


//    db = new Dbcontext();
//    updateCustomerTable();
    
//document.getElementById("CreateCustomerFormCardTittle").innerText = ("Customer Create Form");
//})();

document.getElementById("AdressTypeId").addEventListener("change", showAdress);
document.getElementById("Name").addEventListener("keyup", validateName);
document.getElementById("Email").addEventListener("keyup", validateEmail);
document.getElementById("ContactNo").addEventListener("keyup", validateContactNo);
document.getElementById("AdressTypeId").addEventListener("change", validateAdressType);
document.getElementById("Adress").addEventListener("keyup", validateAdress);

document.getElementById("SubmitButton").addEventListener("click", formSubmit);
document.getElementById("SearchButton").addEventListener("click", search);

//$("#EditBtn").click(function () {
//    alert("Yes");
//});

$(document).on("click", ".edit-btn", function () {
    const customerId = $(this).data("id");
    //const customer = db.Customers.find(c => c.id === Number(customerId));

    //    document.getElementById("Name").value = customer.name;

    if (Customer > 0) {
        setCustomerForm(customerId);
    }
    
});
 

var db = null;
var customerFilterList = [];

function search() {
    customerFilterList = [];
    const searchModel = getSearchModel();

    if (searchModel !== false) {

        for (let i = 0; i < db.Customers.length; i++) {
            const customer = db.Customers[i];

            if (customer.name.toLowerCase().includes(searchModel.name.toLowerCase())) {

                customerFilterList.push(customer);
            }
        }
    }

    updateSearchTable() ;
}

function getSearchModel() {

    const model = {
        name: document.getElementById("SearchName").value,
        email: document.getElementById("SearchEmail").value
    }

    return model;
}

function setCustomerForm(data) {
    const localVar = "";

    if (!(data > 0) && isNaN(data) && Object.keys(data).length > 0){
        localVar = data;
    } else if (data > 0) {
        localVar = getById(data);
    }

    $("#Name").val(localVar.name);
    $("#Email").val(localVar.customer);
    $("#ContactNo").val(localVar.contactNo);
    $("#AdressTypeId").val(localVar.adressTypeId);
    $("#Adress").val(localVar.adress);
     
}

function getById(id) {
    return db.Customers.find(c => c.id == id);
}



function showAdress() {
    var adressTypeId = document.getElementById("AdressTypeId").value;
    var el = document.getElementById("AdressDiv");


    if (adressTypeId > 0) {
        var el = document.getElementById("AdressDiv");
        el.style.visibility = "visible";
    }

    else {
        el.style.visibility = "hidden";
    }

    if (adressTypeId== 1) {
        document.getElementById("AdressLabel").innerText = "Present Adress*";
        document.getElementById("AdressSpan").innerText = "Present Adress is required*";
    }

    else if (adressTypeId == 2) {
        document.getElementById("AdressLabel").innerText = "Permanent Adress*";
        document.getElementById("AdressSpan").innerText = "Permanent Adress is required*";
    }
} 

function formSubmit() {
    const isNameValid= validateName();
    const isEmailValid = validateEmail();
    const isContactNoValid = validateContactNo();
    const isAdressTypeValid = validateAdressType();
    const isAdressValid = validateAdress();

    if (isNameValid && isEmailValid && isContactNoValid && isAdressTypeValid && isAdressValid) {
        const customer = new Customer();

        customer.id = db.Customers.length;
        customer.name = document.getElementById("Name").value;
        customer.email = document.getElementById("Email").value;
        customer.contactNo = document.getElementById("ContactNo").value;
        customer.adressTypeId = document.getElementById("AdressTypeId").value;
        customer.adressTypeName = document.getElementById("AdressTypeId").selectedOptions[0].text;
        customer.adress = document.getElementById("Adress").value;

        db.Customers.push(customer);

        updateCustomerTable();

        clearForm();
        
    }
    else {
        
    }
    
}

function clearForm() {
    document.getElementById("Name").value="";
    document.getElementById("Email").value="";
    document.getElementById("ContactNo").value="";
    document.getElementById("AdressTypeId").value="";
    document.getElementById("Adress").value="";
}

//nabid hasan Code

function updateCustomerTable() {
    if (Array.isArray(db.Customers) && db.Customers.length > 0) {
        let sL = 1;

        $.each(db.Customers, function (i, customer) {
            const slCol = `<td>${++i}</td>`;
            const nameCol = `<td>${customer.name}</td>`;
            const emailCol = `<td>${customer.email}</td>`;
            const contactNoCol = `<td>${customer.contactNo}</td>`;
            const adressTypeNameCol = `<td>${customer.adressTypeName}</td>`; 
            const adressCol = `<td>${customer.adress}</td>`;
            const action = `<td>
              <button id='EditBtn_${i}' type='button' data-id='${customer.id}' class='btn btn-warning btn-sm edit-btn'>Edit</button>
              <button id='RemoveItemBtn_${i}' type='button' class='btn btn-danger btn-sm remove-btn'>Remove</button>
                 </td>`;

            const row = `<tr>${slCol + nameCol + emailCol + contactNoCol + adressTypeNameCol + adressCol + action} </tr>`

            $("#CustomerTBody").append(row);
        });

        //for (let i = 0; i < db.Customers.length; i++) {
        
        //}
        //document.getElementById("CustomerTBody").innerHTML = rows;  

    }
}

function updateSearchTable() {
    if (Array.isArray(customerFilterList) && customerFilterList.length > 0) {
        let rows = "";
        let sL = 1;
        for (let i = 0; i < customerFilterList.length; i++) {
            const customer = customerFilterList[i];

            const slCol = `<td>${sL++}</td>`;
            const nameCol = `<td>${customer.name}</td>`;
            const emailCol = `<td>${customer.email}</td>`;
            const contactNoCol = `<td>${customer.contactNo}</td>`;
            const adressTypeNameCol = `<td>${customer.adressTypeName}</td>`;
            const adressCol = `<td>${customer.adress}</td>`;
            const action = `<td>
              <button id='EditBtn' type='button' class='btn btn-warning btn-sm'>Edit</button>
              <button id='RemoveItemBtn' type='button' class='btn btn-danger btn-sm'>Remove</button>
                 </td>`;

            const row = `<tr>${slCol + nameCol + emailCol + contactNoCol + adressTypeNameCol + adressCol + action}</tr>`
            rows += row;

        }
        document.getElementById("CustomerSearchTBody").innerHTML = rows;




    }
}

//function setCustomerForm(data) {
//    if (isNaN(data) && )
//}

//function getById(id) {
//    return db.Customers(c => c.id == id);
//}

function validateName() {
    const name = document.getElementById("Name").value;

    if (name == "" || name == undefined || name == null) {
        document.getElementById("NameSpan").style.display = "block";
    } else {
        document.getElementById("NameSpan").style.display = "none";
        return true;
    }
    return false;
}

function validateEmail() {   
    const email = document.getElementById("Email").value;

    if (email == "" || email == undefined || email == null) {
        document.getElementById("EmailSpan").style.display = "block";
    } else {
        document.getElementById("EmailSpan").style.display = "none";
        return true;
    }
    return false;
}

function validateContactNo() {
    const contact = document.getElementById("ContactNo").value;

    if (contact == "" || contact == undefined || contact == null) {
        document.getElementById("ContactNoSpan").innerText = "Contact is Required";
        document.getElementById("ContactNoSpan").style.display = "block";
    } else {
        if (!isNaN(contact)) {
            document.getElementById("ContactNoSpan").style.display = "none"
            return true;
        } else {
            document.getElementById("ContactNoSpan").innerText = "Contact is not in valid Formet";
            document.getElementById("ContactNoSpan").style.display = "block";

        }
       
    }
    return false;

}

function validateAdressType() {
    const adressTypeId = document.getElementById("AdressTypeId").value;

    if (!(adressTypeId>0)) {
        document.getElementById("AdressTypeIdSpan").style.display = "block";
    } else {
        document.getElementById("AdressTypeIdSpan").style.display = "none";
        return true;
    }
    return false;
}

function validateAdress() {
    const adressTypeId = document.getElementById("AdressTypeId").value;
    const adress = document.getElementById("Adress").value;

    if (adressTypeId > 0 && (adress == "" || adress == undefined || adress == null)) {
        document.getElementById("AdressSpan").style.display = "block";
    } else {
        document.getElementById("AdressSpan").style.display = "none";
        return true;
    }
    return false;
}













