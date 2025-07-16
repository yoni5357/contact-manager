
import { addContact, deleteContact, searchContacts } from "./commandHandler"
import { mockContacts, mockParams } from "../mockData";

describe('commandHandler', () => {
    // addContact function tests
    it('Should throw an error if email already exists', () => {
        expect(() => {addContact(mockContacts, mockParams[13])}).toThrow('❌ Email already exists');
    })
    it('Should add a new contact successfully', () => {
        expect(() => {addContact(mockContacts, mockParams[0])}).not.toThrow();
        expect(mockContacts).toHaveLength(11);
    })

    // deleteContact function tests
    it('Should throw an error if email does not exist', () => {
        expect(() => {deleteContact(mockContacts, mockParams[11])}).toThrow('❌ Email does not exist');
    })
    it('Should delete a contact successfully', () => {
        expect(() => {deleteContact(mockContacts, mockParams[13].email)}).not.toThrow();
        expect(mockContacts).toHaveLength(10);
    })

    // searchContact function tests
    it('Should print out search results for a valid query', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        searchContacts(mockContacts, mockParams[8].cname);
        expect(consoleSpy).toHaveBeenCalledWith(`=== Search Results for "${mockParams[8].cname}" ===`);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(mockContacts[8].cname));
        
        consoleSpy.mockRestore();
    })
})
