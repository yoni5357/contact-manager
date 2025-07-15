export function findIndexByEmail(data, email) {
    for (let i in data) {
        if (data[i].email === email) return i;
    }
    return -1;
}

function formatContact(contact) {
    return `${contact.cname} - ${contact.email} - ${contact.phone}`;        
}

export function printContacts(contacts) {
    for (let i in contacts) {
        console.log(`${i}. ${formatContact(contacts[i])}`);        
    }   
}