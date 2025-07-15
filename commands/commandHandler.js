import { findIndexByEmail, printContacts } from "../services/services.js";
import { updateFile } from "../utils/fileUtils.js";

//add, list, search, delete, help functions

// All functions should get contcacts object as argument.
// All functions assume that all data recieved is already validated.


// --Edit contacts--

export function addContact(contacts, newContact) {
    if (findIndexByEmail(contacts, newContact.email) >= 0) {
        throw Error('❌ Email already exists');
    }

    delete newContact['command'];
    contacts.push(newContact);
    console.log('➕ Contact added: ', newContact.cname);
}

export function deleteContact(contacts, email) {
    const removeIndex = findIndexByEmail(contacts, email);
    if (removeIndex < 0) {
        throw Error('❌ Email does not exist')
    }
    console.log('🔥 Contact removed: ', contacts[removeIndex].cname);
    contacts.splice(removeIndex, 1)
}

// -- Show Contacts --
export function listContacts(contacts) {
    console.log('=== All Contacts ===');
    printContacts(contacts);
}

export function searchContacts(contacts, query) {
    const filteredContacts = contacts.filter(contact => contact.cname.includes(query) || contact.email.includes(query));

    console.log(`=== Search Results for "${query}" ===`);

    if (filteredContacts.length > 0) {
        printContacts(filteredContacts);
    }
    else console.log(`No contacts found matching "${query}"`);

}

// Other
export function displayHelp() {
    console.log('Usage: node app.js [command] [arguments]\n');
    console.log('Commands: ');
    console.log(`  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message`);
}