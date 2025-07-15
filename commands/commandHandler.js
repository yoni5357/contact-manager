import { updateFile } from "../utils/fileUtils";

//add, list, search, delete, help functions

// All functions should get contcacts object as argument.
// All functions assume that all data recieved is already validated.

function addContact(contacts, newContact) {
    contacts.push(newContact);
    console.log('Contact added: ', newContact.name);
    return true;    
}