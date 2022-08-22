var contacts = [
    {
        username:"ahmed",
        phone:"123"
    }
]


function addNewContact(){
    var newContact = {};
    newContact.username = prompt("enter contact username");
    newContact.phone = prompt("enter contact phone");
    contacts.push(newContact);
}

function searchForContact(){
    var searchKeyword = prompt("enter username or phone")
    for(var i =0;i<contacts.length;i++){
        var currentContact = contacts[i];
        if(searchKeyword == currentContact.username || searchKeyword == currentContact.phone){
            alert("userusername = "+currentContact.username +" phone = "+currentContact.phone);
            break;
        }

    }
}


function runPhoneBook(){
    var stop = false;
    do{
        var op = prompt("what do you want (add,search,exit)");
        switch(op){
            case "add":
                addNewContact();
            break;
            case "search":
                searchForContact();

            break;
           

        }
    }while(!stop)
}

runPhoneBook();




function Contact(username,phone){
    this.username=username;
    this.phone=phone;
    this.showDeatils=function(){
        alert("username = "+this.username +" phone = "+this.phone);
    }
}



var phoneBook = {
    contacts:[],
    addNewContact:function (){
        var newContact = new Contact("","");
        newContact.username = prompt("enter contact username");
        newContact.phone = prompt("enter contact phone");
        phoneBook.contacts.push(newContact);
    },
    searchForContact:function (){
        var searchKeyword = prompt("enter username or phone")
        for(var i =0;i<phoneBook.contacts.length;i++){
            var currentContact = phoneBook.contacts[i];
            if(searchKeyword == currentContact.username || searchKeyword == currentContact.phone){
                currentContact.showDeatils();
                break;
            }

        }
    },
    run:function (){
        var stop = false;
        do{
            var op = prompt("what do you want (add,search,exit)");
            switch(op){
                case "add":
                    phoneBook.addNewContact();
                break;
                case "search":
                    phoneBook.searchForContact();

                break;
                

            }
        }while(!stop)
    }
}


phoneBook.contacts.push(new Contact("ahmed","123"))


phoneBook.run();