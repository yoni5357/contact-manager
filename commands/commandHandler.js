import { updateFile } from "../utils/fileUtils";

//add, list, search, delete, help functions

// All functions should get contcacts object as argument.
// All functions assume that all data recieved is already validated.


// --Edit contacts--

function addContact(contacts, newContact) {
    // Todo: Add email exists validation
    contacts.push(newContact);
    console.log('Contact added: ', newContact.name);
    return true;    
}

function removeContact(contacts, email) {
    // Todo: Add email exists validation
    
}

// -- Show Contacts --
function listContacts(contacts) {
    console.log('=== All Contacts ===');
    for (let i in contacts) {
        console.log(`${i}. ${contacts[i].name} - ${contacts[i].email} - ${contacts[i].phone}`);        
    }    
}