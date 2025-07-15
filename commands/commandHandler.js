import { findIndexByEmail, printContacts } from "../services/services";
import { updateFile } from "../utils/fileUtils";

//add, list, search, delete, help functions

// All functions should get contcacts object as argument.
// All functions assume that all data recieved is already validated.


// --Edit contacts--

function addContact(contacts, newContact) {
    if (findIndexByEmail(contacts, newContact.email) >= 0) {
        throw Error('❌ Email already exists');
    }

    contacts.push(newContact);
    console.log('➕ Contact added: ', newContact.name);
    return true;    
}

function removeContact(contacts, email) {
    const removeIndex = findIndexByEmail(contacts, email);
    if (removeIndex < 0) {
        throw Error('❌ Email does not exist')
    }
    console.log(console.log('🔥 Contact removed: ', contacts[removeIndex].name));
    contacts.splice(removeIndex, 1)        
}

// -- Show Contacts --
function listContacts(contacts) {
    console.log('=== All Contacts ===');
    printContacts(contacts) ;
}