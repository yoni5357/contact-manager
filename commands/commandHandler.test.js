import { addContact } from "./commandHandler"
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
})
