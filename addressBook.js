class AddressBook{
    //property
    fullname;
    address;
    city;
    state;
    email;
    zip;
    phone;
    //constructor
    constructor(...params){
        this.fullname=params[0];
        this.address=params[1];
        this.city=params[2];
        this.state=params[3];
        this.email=params[4];
        this.zip=params[5];
        this.phone=params[6];
    }
    //to string method
    toString(){
        return "fullname="+this.fullname+",address="+this.address+",city="+this.city+",state="+this.state+",email="+
        this.email+",zip="+this.zip+",phone="+this.phone;

    }

}
const prompt = require('prompt-sync')();
//menu
console.log("1.add contacts\n2.print contacs\n3.get contact count\n4.edit contacts\n5.delete contacts\n6.sort contacts");
//variables
var choice=0;
var contactArray=[];
var cityArray=[];
var stateArray=[];
var zipArray=[];
//
while(choice<=6){
    choice= parseInt(prompt('your choice = '));
    //switch case for all operations
    switch(choice){
        //add contacts to addressbook
        case 1:

           checkregets();
        
            contactArray.push(new AddressBook(fullname,address,city,state,email,zip,phone));
           
            contactArray= removeDuplicates(contactArray);
            contactArray.sort();

            break;
        //print all datas in the addressbook
        case 2:
            
            console.log(contactArray);
            break;
        //get count of contacts in addressbook    
        case 3:
            //menu
            console.log("1.whole contact count\n2.city by count\n3.count by state\n4.count by zip");
            let countCheck= parseInt(prompt('enter your option = '));
            //switch case to print count by city ,state or zip
            switch(countCheck){
                case 1:
                    console.log(contactArray.length);
                    break;
                case 2:
                    console.log(cityArray.length);
                    break;
                case 3:
                    console.log(stateArray.length);
                    break;
                case 4:
                    console.log(zipArray.length);
                    break;
                default:
                    console.log("invalid input");
                    break;            

            }
            break;
        //modify contacts in addressbook by inputting person name    
        case 4:
            //menu
            console.log("1.modify fullname\n2.modify address\n3.modify city\n4.modify state\n5.modify zip\n6.modify phone");
            let option= parseInt(prompt('your choice = '));
            let searchName = prompt('searchName = ');
            //switch case to modity name,address,city,state,zip,phone
            switch(option){
               
                case 1:
                    let newName = prompt('newName = ');
                    contactArray.filter(contact=>contact.fullname==searchName).map(contact=>contact.fullname=newName);
                    break;
                case 2:
                    let newAddress = prompt('newAddress = ');
                    contactArray.filter(contact=>contact.fullname==searchName).map(contact=>contact.address=newAddress);
                    break;
                case 3:
                    let newCity = prompt('newCity = ');
                    contactArray.filter(contact=>contact.fullname==searchName).map(contact=>contact.city=newCity);
                    break;
                case 4:
                    let newState = prompt('newState = ');
                    contactArray.filter(contact=>contact.fullname==searchName).map(contact=>contact.state=newState);
                    break;
                case 5:
                    let newZip= parseInt(prompt('newZip = '));
                    contactArray.filter(contact=>contact.fullname==searchName).map(contact=>contact.zip=newZip);
                    break;
                case 6:
                    let newPhone= parseInt(prompt('newPhone = '));
                    contactArray.filter(contact=>contact.fullname==searchName).map(contact=>contact.phone=newPhone);
                    break;
                default:
                    console.log("invalid input");
                    break;
                       
            }
            break;
        // delete contacts in addressbook by inputting person name   
        case 5:
            let searchNameToDelete = prompt('searchName = ');
            let index=contactArray.indexOf(contactArray.filter(contact=>contact.fullname==searchNameToDelete)); 
            contactArray.pop(index); 
            break;
        //sort contacts in addressbook    
        case 6:
            //menu
            console.log("1.sort by city\n2.sort by state\n3.sort by zip");
            let choose= parseInt(prompt('your choice = '));
            //switch case to sort contacts by city,state,zip
            switch(choose){
                case 1:
                    let cityName = prompt('city name = ');
                    cityArray=contactArray.filter(contact=>contact.city==cityName);
                    console.log(cityArray);
                    break;
                case 2:
                    let stateName = prompt('state name = ');
                    stateArray=contactArray.filter(contact=>contact.state==cityName);
                    console.log(stateArray);
                    break;
                case 3:
                    let ZipValue = prompt('newState = ');
                    zipArray=contactArray.filter(contact=>contact.zip==ZipValue);
                    console.log(zipArray);
                    break;
                default:
                    console.log("invalid input");
                    break;
            }
            break;
        default:
            console.log("invalid input");
            break;  
    }
//menu
console.log("1.add contacts\n2.print contacs\n3.get contact count\n4.edit contacts\n5.delete contacts\n6.sort contacts");
}
//function to remove duplicates from array
function removeDuplicates(arrOfObj){
    
    var dataArr = arrOfObj.map(item=>{
        return [item.fullname,item]
    }); // creates array of array
    var maparr = new Map(dataArr); // create key value pair from array of array
    
    var result = [...maparr.values()];//converting back to array from mapobject
    console.log(result);
    
    return result; //[{"name":"abc","age":27},{"name":"pqr","age":27}]
}
function checkregets(){
    const prompt = require('prompt-sync')();
    //regets
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{1,}$');
    let emailRegex=RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let telRegex=RegExp('^([0-9]{2})+\\s+[0-9]{10}$');
    let zipRegex=RegExp('^[0-9]{3,}$');
    let regex=RegExp('^[A-Za-z]{3}');
    var fullname = prompt('fullname = ');
    if(nameRegex.test(fullname)){
        console.log("name is correct");
    }else{
        console.log("name is incorrect");
        checkregets();
    }
    var address= prompt('address = ');
    if(regex.test(address)){
        console.log("address is correct");
    }else{
        console.log("address is incorrect");
        checkregets();
    }
    var city= prompt('city = ');
    if(regex.test(city)){
        console.log("city is correct");
    }else{
        console.log("city is incorrect");
        checkregets();
    }
    var state= prompt('state = ');
    if(regex.test(state)){
        console.log("state is correct");
    }else{
        console.log("state is incorrect");
        checkregets();
    }
    var email=prompt('email =');
    if(emailRegex.test(email)){
        console.log("email is correct");
    }else{
        console.log("email is incorrect");
        checkregets();
    }
    var zip= parseInt(prompt('zip = '));
    if(zipRegex.test(zip)){
        console.log("zip is correct");
    }else{
        console.log("zip is incorrect");
        checkregets();
    }
    var phone= parseInt(prompt('phone = '));
    if(telRegex.test(phone)){
        console.log("phone is correct");
    }else{
        console.log("phone is incorrect");
        checkregets();
    }
}
    



    


