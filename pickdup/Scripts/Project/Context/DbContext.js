class Dbcontext {
    constructor() {
        this.Customers= getcustomerModels();

    }
    Customers = [];
}

function getcustomerModels(customerModels) {
    customerModels = [];
    const customerOne = new Customer();
    const customerTwo = new Customer();
    const customerThree = new Customer();
    const customerFour = new Customer();


    customerOne.id = 1;
    customerOne.name = "Asif";
    customerOne.email = "asif1925@gmail.com";
    customerOne.contactNo = "017423987287";
    customerOne.adressTypeId = "1";
    customerOne.adressTypeName = "Present Adress"
    customerOne.adress = "Khulna";
    customerModels.push(customerOne);

    customerTwo.id = 2;
    customerTwo.name = "Nabid";
    customerTwo.email = "nabid@gmail.com";
    customerTwo.contactNo = "01626323982";
    customerTwo.adressTypeId = "1";
    customerTwo.adressTypeName = "Present Adress";
    customerTwo.adress = "Gopalgonj";
    customerModels.push(customerTwo);

    customerThree.id = 3;
    customerThree.name = "Fahad";
    customerThree.email = "fahad@gmail.com";
    customerThree.contactNo = "0174239872";
    customerThree.adressTypeId = "1";
    customerThree.adressTypeName = "Present Adress";
    customerThree.adress = "Gazipur";
    customerModels.push(customerThree);

    customerFour.id = 4;
    customerFour.name = "Sharif";
    customerFour.email = "sharif@gmail.com";
    customerFour.contactNo = "01742398729";
    customerFour.adressTypeId = "1";
    customerFour.adressTypeName = "Present Adress";
    customerFour.adress = "Uttara";
    customerModels.push(customerFour);

    return customerModels;
}