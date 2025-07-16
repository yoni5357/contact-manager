import { mockContacts } from "../mockData.js";
import { findIndexByEmail, formatContact } from "./services.js"

// Per module

describe('Services Module', () => {
    // Per function
    it('Should return index based on email or -1 if not found', () => {
        // All tests for this function
        expect(findIndexByEmail(mockContacts, 'john.doe@gmail.com')).toBe('0');
        expect(findIndexByEmail(mockContacts, 'tom.adler@gmail.com')).toBe('7');
        expect(findIndexByEmail(mockContacts, '')).toBe(-1);
        expect(findIndexByEmail(mockContacts, 'not@existing')).toBe(-1);
    })

    it('Should format a contact like this: {contact.name} - {contact.email} - {contact.phone}', () => {
        expect(formatContact(mockContacts[0])).toBe('John Doe - john.doe@gmail.com - 0541234567');
        expect(formatContact(mockContacts[1])).toBe('Sarah Lee - sarah.lee@example.com - 0523456789');
    })

})