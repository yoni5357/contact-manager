import { addContact, deleteContact } from "./commandHandler"
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
})
