var phoneBook = {
    contacts:[],
    addNewContact:function (){
        var newContact = "";
        newContact.name = prompt("enter name");
        newContact.phone = prompt("enter phone");
        phoneBook.contacts.push(newContact);
    },
    searchForContact:function (){
        var searchKeyword = prompt("enter name or phone")
        for(var i =0;i<phoneBook.contacts.length;i++){
            var currentContact = phoneBook.contacts[i];
            if(searchKeyword == currentContact.name || searchKeyword == currentContact.phone){
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
                    alert()

                break;
                case "exit":
                    stop = true;
                break;

            }
        }while(!stop)
    }
}




phoneBook.run();
